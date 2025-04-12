import React, { useState } from 'react'
import questionData from '../assets/questions.json';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const qContainer = document.querySelector('#qContainer');
  const sContainer = document.querySelector('#sContainer');
  const [qnum,setqnum] = useState(1);
  const [score ,setScore] = useState(0);
  const [randomNumber,setrandomNumber] = useState(Math.floor(Math.random() * 400) + 1)
  const [ans, setans] = useState(questionData[randomNumber].answer);
  
  useEffect(()=>{
    setrandomNumber(Math.floor(Math.random() * 400) + 1);
    setans(questionData[randomNumber].answer);
    const buttons = document.querySelectorAll('#buttonAns');
    buttons.forEach(button => {
      button.disabled = false;
      button.classList.remove('bg-green-500', 'bg-red-500');
    });
    
  },[qnum])
  
  function handleClick(){
    if(qnum<10)
    {
      setqnum(qnum+1);
    }
    else
    {
      setqnum(1);
      qContainer.classList.add('hidden');
      sContainer.classList.remove('invisible');
    }

  }
  function checkAns(e){
    console.log(ans);
    console.log(e.target.value);
    if(e.target.value === ans)
    {
      e.target.classList.add('bg-green-500');
      setScore(score+1);
      const buttons = document.querySelectorAll('#buttonAns');
      buttons.forEach(button => button.disabled = true);
    }
    else
    {
      e.target.classList.add('bg-red-500');
      const buttons = document.querySelectorAll('#buttonAns');
      buttons.forEach(button => button.disabled = true);
    }
  }
  return (
    <div className='bg-[#D0D2D4] h-[100vh] flex justify-center items-center dark:bg-slate-800'>
      <div className='text-wrap h-[35.125rem] w-[43.75rem] bg-white rounded-xl m-5 shadow-xl flex justify-start gap-5 items-start p-10 flex-col dark:bg-[#1e1e1e] dark:text-white'>
        <div id='qContainer' className='w-[100%] pt-[1.25rem]'>
        <h1 className='mb-5'>{qnum} . {questionData[randomNumber].question}</h1>
        <hr className='mt-2 mb-2 h-1 bg-black border-none w-[100%] dark:bg-white' />
        <ol type='1' className='flex flex-col items-start gap-2 w-[100%]'>
          <li className='w-[100%]'>
            <button className='border cursor-pointer rounded w-[100%] p-2' id='buttonAns' onClick={checkAns} value='A'>
              {questionData[randomNumber].A}
            </button>
          </li>
          <li className='w-[100%]'>
            <button className='border cursor-pointer rounded w-[100%] p-2' id='buttonAns' onClick={checkAns} value='B'>
              {questionData[randomNumber].B}
            </button>
          </li>
          <li className='w-[100%]'>
            <button className='border cursor-pointer rounded w-[100%] p-2' id='buttonAns' onClick={checkAns} value='C'>
              {questionData[randomNumber].C}
            </button>
          </li>
          <li className='w-[100%]'>
            <button className='border cursor-pointer rounded w-[100%] p-2' id='buttonAns' onClick={checkAns} value='D'>
              {questionData[randomNumber].D}
            </button>
          </li>
        </ol>
        <div className='flex flex-col justify-center items-center mt-4 gap-5'>
          <button onClick={handleClick} className='bg-yellow-300 py-2 w-[10rem] rounded-lg mt-6 dark:text-black'>
            Next
          </button>
          <p>{qnum} of 10 questions</p>
        </div>
        <h2 className='mt-5 self-center bg-yellow-300 h-8 p-3 flex justify-center items-center rounded dark:text-black '>Current Score: {score}</h2>
        </div>
        <div id='sContainer' className='invisible text-[#00df9a] font-bold gap-10 h-[100%] flex w-[100%] flex-col justify-center items-center'>
          <h1 className='text-7xl'>Your Score</h1>
          <h2 className='text-5xl'>{score} out of 10</h2>
          <button className='bg-yellow-300 py-2 w-[10rem] rounded-lg mt-6 text-black font-normal'>
            <Link to='/'>Home</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quiz
