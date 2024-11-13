import {FiGithub} from 'react-icons/fi';
import {FaLinkedinIn} from 'react-icons/fa6';
import profile from "../assets/profpic.jpg"; 
import {LuMouse} from 'react-icons/lu';
import { useLayoutEffect } from 'react';



const Banner = () => {
  

  return (
    <div id='Home' className="text-center pt-10 lg:w-[100%]">

      <h2 id='' className="text-xl">Hello, I am</h2>
      <h2 className="text-3xl my-2">Gargi Thapa</h2>

      <p>I’m a frontend developer and passionate computer science enthusiast.
      </p>

      <div id="intro-slider" className="flex gap-2 justify-center">
        
      </div>
      <div className="text-white flex lg:flex-row flex-col lg:justify-around items-center">
      <div className='flex gap-2 lg:flex-col justify-center mt-10'>
        < a href="https://github.com/gaaarrrgiiiiiiiiiii">
        <FiGithub className='bg-gray-900 p-[6px] text-3xl rounded' />
        </a>
        <a href="https://www.linkedin.com/in/gargi-thapa-089767294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
        <FaLinkedinIn className='bg-gray-900 p-[6px] text-3xl rounded' />
        </a>
        

      </div>
      <img className=' lg:h-80 h-96 mt-10 rounded-xl' src={profile} alt="" />

      <div className='hidden lg:flex flex-col justify-center'>
      <LuMouse className='text-xl animate-bounce mb-4' />
      <p className='[writing-mode:vertical-rl]'>
        Torture the data and it will confess to anything
      </p>

      </div>

      </div>
      

      
    </div>
  )
}

export default Banner;