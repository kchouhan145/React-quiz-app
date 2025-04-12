import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-[#D0D2D4] h-full flex justify-center items-center dark:bg-slate-800'>
            <div className='text-center h-[35.125rem] w-[43.75rem] bg-white rounded-xl m-5 shadow-xl flex flex-col justify-center items-center dark:bg-[#1E1E1E] dark:text-white'>
                <h1 className='text-5xl text-wrap text-shadow-lg'>Welcome to the Quiz.</h1>
                <h2>By Kartik Chouhan</h2>
                <button className='bg-yellow-300 py-2 w-[14rem] rounded-lg self-center mt-6 h-[3.5rem] dark:text-black'>
                    <Link to='/quiz' className='text-sm sm:text-base'>Get Started</Link>
                </button>
            </div>
        </div>
    )
}

export default Home
