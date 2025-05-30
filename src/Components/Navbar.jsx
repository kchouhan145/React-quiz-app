import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark])

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-[#1e1e1e] flex justify-between items-center h-16 max-w-full mx-auto px-4 text-white'>

      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Quiz App</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        <li className='p-4 m-2 cursor-pointer ' ><NavLink to='/'>Home</NavLink></li>
        <li className='p-4 m-2 cursor-pointer ' ><NavLink to='/quiz'>Quiz</NavLink></li>
        <li className='p-4 m-2 cursor-pointer ' ><NavLink to='/developer'>Developer</NavLink></li>
        <li className='p-4 m-2 cursor-pointer'><button onClick={() => setIsDark(!isDark)}>{isDark ? 'Light' : 'Dark'}
        </button></li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Quiz App</h1>

        {/* Mobile Navigation Items */}
        <li className='p-4 border-b rounded-xl cursor-pointer border-gray-600'><NavLink to='/'>Home</NavLink></li>
        <li className='p-4 border-b rounded-xl cursor-pointer border-gray-600'><NavLink to='/quiz'>Quiz</NavLink></li>
        <li className='p-4 border-b rounded-xl cursor-pointer border-gray-600'><NavLink to='/developer'>Developer</NavLink></li>
        <li className='p-4 m-2 cursor-pointer'><button onClick={() => setIsDark(!isDark)}>{isDark ? 'Light' : 'Dark'}
        </button></li>
      </ul>
    </div>
  );
};

export default Navbar;