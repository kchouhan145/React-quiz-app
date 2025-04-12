import React from 'react'
import { Link } from 'react-router-dom';

const Developer = () => {
  return (
    <div className='bg-[#D0D2D4] h-[100vh] flex justify-center items-center dark:bg-slate-800'>
      <div className='h-[35.125rem] w-[43.75rem] bg-white rounded-xl m-5 text-center shadow-xl flex justify-center items-center flex-col dark:bg-[#1e1e1e] dark:text-white'>
        <h1 className='font-bold text-3xl sm:text-4xl'>HEY, I'M KARTIK CHOUHAN</h1>
        <p className='text-sm sm:text-base'>A Frontend focused Web Developer building the Frontend of Web Applications.</p>
        <p className='text-sm sm:text-base'>Currently working on React and learning Backend</p>
        <button className='bg-yellow-300 py-2 w-[10rem] rounded-lg self-center mt-6 dark:text-black'>
          <Link to='https://kartik-chouhan.vercel.app/' className='text-sm sm:text-base'>Portfolio</Link>
        </button>
      </div>
    </div>
  )
}

export default Developer
