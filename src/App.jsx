import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Developer from './Components/Developer';
import Footer from './Components/Footer';

function App() {
  const reactRouter = createBrowserRouter([
    {
      path:'/',
      element:
        <div>
          <Navbar/>
          <Home/>
          <Footer/>
        </div>
    },
    {
      path:'/quiz',
      element:
        <div>
          <Navbar/>
          <Quiz/>
          <Footer/>          
        </div>
    },
    {
      path:'/developer',
      element:
        <div>
          <Navbar/>
          <Developer/>
          <Footer/>         
        </div>
    }
  ])

  return (
    <div>
      <RouterProvider router={reactRouter}></RouterProvider>
    </div>
  )
}

export default App
