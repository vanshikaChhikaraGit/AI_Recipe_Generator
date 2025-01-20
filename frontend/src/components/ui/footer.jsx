import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-0 flex flex-col justify-center items-center bg-zinc-800 p-4 text-white'>
        <div className='flex flex-row text-center justify-center items-center'>
            <img src='/fork.png' className='w-20'></img>
            <div className='border-b'>
                <h1 className='sm:text-4xl font-bold text-md mb-2'>AI-Powered Recipe Magic</h1>
                <p className='m-4'>Rawcipes is a revolutionary AI-powered recipe generator. Enter your desired ingredients, recipe ideas, or dietary preferences and our advanced algorithm will instantly craft a completely unique recipe just for you. Join us in transforming the way we plan and prepare meals.</p>
            </div>
            <img src='/fork.png' className='w-20'></img>
        </div>
        <div className='p-4 m-4 flex flex-row justify-center items-center bg-neutral-700 border-none rounded-lg hover:bg-purple-950 hover:bg-opacity-50'>
            <img src='/fridge.png' className=' w-20 h-30'></img>
            <div>
                <h1 className='sm:text-4xl font-bold text-md m-2 font-bangers '>Reduce Waste - Save Money</h1>
                <p className='m-4 text-sm'>The average family throws away $150/month in wasted food. DishGen helps you save money by creating intelligent and delicious ways to use up leftover ingredients. Input the ingredients you have on hand, and our AI assistant will suggest unique recipes. Less waste, more savings.</p>
                
            </div>
        </div>
        <div className='p-4 m-4 flex flex-row justify-center items-center bg-neutral-700 border-none rounded-lg  hover:bg-purple-950 hover:bg-opacity-50'>
        
            <div className=''>
                <h1 className='sm:text-4xl font-bold text-md m-2 font-bangers '>Creative Meal Planning in a Snap</h1>
                <p className='m-4 text-sm'>
                Meal planning is a breeze with DishGen. Say goodbye to hours spent browsing cookbooks or searching recipe blogs for ideas. Our powerful Idea Generator can provide 7 different suggestions for any requirements or list of ingredients. Then, it can create complete, detailed recipes for all your favorite suggestions.</p>
                
            </div>
            <img src='/plan.png' className=' w-20 h-30'></img>
        </div>
        <div></div>
    </div>
  )
}

export default Footer