import { GoogleGenerativeAI,SchemaType } from "@google/generative-ai";


export const generateRecipe = async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GENAI_API_KEY);
    const schema = {
    description: "List of recipes",
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        title: {
          type: SchemaType.STRING,
          description: "Title of the recipe",
          nullable: false,
        },
        description: {
          type: SchemaType.STRING,
          description: "Description of the recipe",
          nullable: false,
        },
        servings: {
          type: SchemaType.STRING,
          description: "Number of servings",
          nullable: true,
        },
        prepTime: {
          type: SchemaType.STRING,
          description: "Preparation time for the recipe",
          nullable: true,
        },
        ingredients: {
          type: SchemaType.ARRAY,
          description: "List of ingredients required for the recipe",
          items: {
            type: SchemaType.STRING,
            description: "An individual ingredient",
          },
          nullable: false,
        },
        steps: {
          type: SchemaType.ARRAY,
          description: "List of steps to prepare the recipe",
          items: {
            type: SchemaType.STRING,
            description: "An individual step",
          },
          nullable: false,
        },
      },
      required: ["title", "description", "ingredients", "steps"],
    },
    };
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      });
      const { prompt } = req.body;
      const result = await model.generateContent(
        `Generate a recipe for ${prompt} dish.`,
      );
      console.log(result.response.text());
      const recipe = result.response.text().trim()
      const parsedJSON = JSON.parse(recipe);
      res.status(200).json(parsedJSON)
} catch (error) {
    console.error("Error generating recipe:", error.message);
    res
      .status(500)
      .json({ message: "Failed to generate recipe", error: error.message });
  }
};

// Save Recipe Function
export const saveRecipe = async (req, res) => {
  const { title, description, servings, prepTime, ingredients, steps } = req.body;

  if (!title || !description || !ingredients || !steps) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const recipe = {
      title,
      description,
      servings: servings || "Not specified",
      prepTime: prepTime || "Not specified",
      ingredients,
      steps,
    };

    // Add recipe to the user's savedRecipes array
    req.user.savedRecipes.push(recipe);
    await req.user.save();

    res.status(200).json({ message: "Recipe saved successfully", recipe });
  } catch (error) {
    console.error("Error saving recipe:", error.message);
    res
      .status(500)
      .json({ message: "Error saving recipe", error: error.message });
  }
};
