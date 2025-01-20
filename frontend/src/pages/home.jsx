import React, { useEffect, useState } from 'react'
import { recipeSuggestions } from '@/lib/constants';
import { TbBulbFilled } from "react-icons/tb";
import axios from 'axios';
import { Loader } from 'lucide-react';
import Recipe from '../components/ui/recipe';
import Footer from '@/components/ui/footer';

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [index, setIndex] = useState(0);
  const [suggestion, setSuggestion] = useState(recipeSuggestions[0]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [recipeData, setRecipeData] = useState(null); // Holds API response

  // Update suggestions every 2 seconds
  useEffect(() => {
    const ideaInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % recipeSuggestions.length);
    }, 2000);

    return () => clearInterval(ideaInterval); // Clear interval on unmount
  }, []);

  useEffect(() => {
    setSuggestion(recipeSuggestions[index]);
  }, [index]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) {
      alert("Please enter a valid recipe prompt."); // Input validation
      return;
    }

    setButtonClicked(true);

    try {
      const response = await axios.post(
        "https://ai-recipe-generator-wfka.onrender.com/api/recipe/generate-recipe",
        { prompt }
      );
      console.log("API Response:", response.data); // Log once
      setRecipeData(response.data); // Update state
    } catch (error) {
      console.error("Error generating recipe:", error);
      alert("Failed to generate recipe. Please try again.");
    } finally {
      setButtonClicked(false);
      setPrompt("");
    }
  };

  return (
    <main>
      <div className="relative flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="bg-[url('/bg.png')] bg-no-repeat bg-cover w-full h-auto p-4 backdrop-blur-sm">
          {/* Content Section */}
          <div className="text-center tracking-tight p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
              Introducing Your Ultimate AI Kitchen Companion
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl w-full">
              Just enter a recipe idea or the ingredients you have, and let
              DishGen's AI quickly craft a brand new recipe
              <br className="hidden sm:inline" />
              tailored to your preferences—ready to cook in no time!
            </p>
          </div>
     
      <form
            className="flex flex-col justify-center items-center mt-8"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Create a recipe for..."
              className="p-3 w-full rounded-full border-2 border-green-700 text-center m-2"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={buttonClicked} // Disable input when submitting
            />
            {buttonClicked ? (
              <Loader className='animate-spin size-7 mt-5'/> // Display loader when button is clicked
            ) : (
              <button
                type="submit"
                className="p-3 w-full font-bold rounded-full border-2 text-center m-2 bg-black text-white"
              >
                Generate
              </button>
            )}
          </form>

        {recipeData && <Recipe data={recipeData} />}

        <div className="flex items-center justify-center mt-6">
          <span className="bg-yellow-300 flex items-center p-2 border-2 border-yellow-200 rounded-full">
           <TbBulbFilled className='size-5 mr-3'></TbBulbFilled> {suggestion}
          </span>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </main>
  );
};



export default Home;

