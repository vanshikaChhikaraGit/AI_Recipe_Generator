import React from 'react'
import { GoDot, GoDotFill } from "react-icons/go";

const Recipe = ({ data }) => {
  if (!data) return null;

  return (
    <div className="container mt-6 p-4 border rounded-lg shadow-md bg-white">
      <div className='flex flex-col justify-center items-center'>
      <h1 className="text-2xl font-bold mb-2 ">{data[0].title}</h1>
      <p className=" text-gray-700 mb-4 text-sm font-semibold">{data[0].description}</p>
      
      <div className='flex flex-row'>
        <p className='border-2 border-sky-300 rounded-full p-1.5 m-1 bg-sky-200 text-sm font-bold text-center '>{data[0].servings} servings</p>
        <p className='border-2 border-sky-300 rounded-full p-1.5 m-1 bg-sky-200 text-sm font-bold text-center'>{data[0].prepTime}</p>
        </div>
         </div>
         <div className="flex flex-col sm:flex-row justify-center items-stretch">
  {/* Ingredients Section */}
  <div className="border-b-4 border-t-4 border-yellow-400 bg-yellow-100 rounded-lg p-4 pb-1 m-3 px-4 flex-1">
    <h1 className="font-bold text-lg text-center">Ingredients</h1>
    {/* Check if ingredients data exists */}
    <ul className="list-disc pl-5">
      {data[0]?.ingredients && data[0].ingredients.length > 0 ? (
        data[0].ingredients.map((ingredient, index) => (
          <li key={index} className="mt-1 text-sm border-b border-gray-400 p-2 last:border-none">
            {ingredient}
          </li>
        ))
      ) : (
        <li>No ingredients available</li>
      )}
    </ul>
  </div>

  {/* Steps Section */}
  <div className="border-b-4 border-t-4 border-pink-400 bg-pink-200 rounded-lg p-4 m-3 px-4 flex-1">
    <h1 className="font-bold text-lg text-center">Steps</h1>
    {/* Check if steps data exists */}
    <ul className="list-disc pl-5">
      {data[0]?.steps && data[0].steps.length > 0 ? (
        data[0].steps.map((step, index) => (
          <li key={index} className="mt-1 text-sm border-b border-purple-400 p-2 last:border-none">
            {step}
          </li>
        ))
      ) : (
        <li>No steps available</li>
      )}
    </ul>
  </div>
</div>


    </div>
  );
};

export default Recipe