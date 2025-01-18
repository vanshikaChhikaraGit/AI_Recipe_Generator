// export const content = `Generate a recipe in JSON format adhering strictly to the following schema:
// {
//   "title": "Recipe Title (Keep it descriptive, e.g., 'Classic Margherita Pizza')",
//   "description": "A concise yet engaging description of the recipe, including its flavors, key ingredients, or cultural origin (e.g., 'A light and fluffy Italian-style pizza topped with fresh mozzarella, basil, and tomatoes.')",
//   "servings": "Exact number of servings or portion size (e.g., 'Serves 4' or 'Yields 8 slices')",
//   "prepTime": "Preparation time in minutes or hours (e.g., '15 minutes')",
//   "cookTime": "Cooking time in minutes or hours (if applicable, e.g., '30 minutes')",
//   "ingredients": [
//     "List of all ingredients with precise quantities, units, and any necessary descriptors (e.g., '2 cups of all-purpose flour', '1/4 cup olive oil', '1 tsp baking powder')."
//   ],
//   "steps": [
//     "Step-by-step instructions written in full sentences. Each step should include specific details, such as cooking temperatures, times, and techniques (e.g., 'Preheat the oven to 375°F (190°C). Grease a baking dish lightly with olive oil.')"
//   ],
//   "notes": [
//     "Optional additional tips, substitutions, or serving suggestions (e.g., 'For a gluten-free option, substitute the flour with almond flour.')"
//   ],
//   "nutritionalInfo": {
//     "calories": "Approximate number of calories per serving (optional).",
//     // "protein": "Protein content per serving in grams (optional).",
//     "carbs": "Carbohydrate content per serving in grams (optional).",
//     "fats": "Fat content per serving in grams (optional)."
//   },
//   "userPrompt": "${prompt}"
// }

// ### Recipe Requirements:
// 1. **Theme Matching**: Align the recipe with the user's theme or cuisine request. For example, if the user asks for "spicy Mexican tacos," ensure the output reflects this theme.
// 2. **Ingredient Accessibility**: Use ingredients commonly available unless the user specifies exotic or unique items.
// 3. **Complexity**: Keep the recipe beginner-friendly unless otherwise requested. If advanced, include detailed instructions for clarity.
// 4. **Nutritional Info**: Include basic nutritional information if possible (optional for free-tier users).
// 5. **Time Accuracy**: Provide accurate preparation and cooking times.
// 6. **Optional Customization**: Include optional variations (e.g., 'Add chili flakes for extra heat') or tips (e.g., 'Best served fresh from the oven').

// ### User Input Example:
// Create a recipe for "a quick and healthy breakfast smoothie for 2 people."

// --- 

// ### Sample Output:
// ###json
// {
//   "title": "Quick and Healthy Breakfast Smoothie",
//   "description": "A refreshing and nutritious smoothie made with fresh fruits, yogurt, and a touch of honey, perfect for a quick start to your day.",
//   "servings": "Serves 2",
//   "prepTime": "5 minutes",
//   "cookTime": "No cooking required",
//   "ingredients": [
//     "1 banana, sliced",
//     "1 cup frozen mixed berries",
//     "1 cup unsweetened almond milk",
//     "1/2 cup Greek yogurt",
//     "1 tbsp honey (optional)",
//     "1/2 tsp chia seeds (optional for extra nutrition)"
//   ],
//   "steps": [
//     "Add the banana, frozen mixed berries, almond milk, and Greek yogurt to a blender.",
//     "Blend on high speed until smooth and creamy, approximately 1–2 minutes.",
//     "Taste the smoothie and add honey if additional sweetness is desired. Blend again briefly to combine.",
//     "Pour the smoothie into two glasses and sprinkle chia seeds on top if using. Serve immediately."
//   ],
//   "notes": [
//     "For a vegan option, use plant-based yogurt and skip the honey.",
//     "You can substitute almond milk with any milk of your choice, such as oat or soy milk."
//   ],
//   "nutritionalInfo": {
//     "calories": "180 per serving",
//     "protein": "6g per serving",
//     "carbs": "28g per serving",
//     "fats": "4g per serving"
//   }
// }
// `;
