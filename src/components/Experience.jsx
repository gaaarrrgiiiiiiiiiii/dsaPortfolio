import React from 'react';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();
  return (
    <div className="py-44 lg:px-64 md:px-28 bg-gray-900" id="Experience">
      <h1 className="text-4xl text-white text-blod mb-10 text-center">Progress</h1>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        <div className="col-span-4 w-full h-full ">
          <div id="intro-Slider" className="w-full h-full p-2 md:pl-4">
            <time className="mb-1 text-sm font-semibold leading-none text-gray-400">July 2024</time>
            <h3 className="text-lg font-semibold text-gray-200 my-2">Basics</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Introduction To C, Introduction to Data, Structures and Algorithms, Arrays and Linked Lists, Structures</p>
          </div>
        </div>

        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-[1px] bg-[#1484da]"></div>
          <div className="absolute w-3 h-3 rounded bg-[#1484da] z-10 text-white text-center"></div>
        </div>

        <div className="col-span-4 w-full h-full"></div>
        <div className="col-span-4 w-full h-full"></div>
        <div className="col-span-4 w-full h-full ">
          <div id="intro-slider" className="w-full h-full p-2 md:pl-24">
            <time className="mb-1 text-sm font-semibold leading-none text-gray-400">October 2024</time>
            <h3 className="text-lg font-semibold text-gray-200 my-2">Medium</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Implemenation of Stacks on Arrays and Linked Lists (Operations: Push, Pop, Peek), Implementation of Queues on Arrays and Linked Lists (Operations: Enqueue, Dequeue, Peek)</p>
          </div>
        </div>

        <div className="col-span-4 w-full h-full ">
          <div id="intro-Slider" className="w-full h-full p-2 md:pl-4">
            <time className="mb-1 text-sm font-semibold leading-none text-gray-400">November 2024</time>
            <h3 className="text-lg font-semibold text-gray-200 my-2">Advanced</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Trees, Heaps, Graphs, Searching and Sorting</p>
          </div>
        </div>

        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-[1px] bg-[#1484da]"></div>
          <div className="absolute w-3 h-3 rounded bg-[#1484da] z-10 text-white text-center"></div>
        </div>

        <div className="col-span-4 w-full h-full"></div>
        <div className="col-span-4 w-full h-full">
        </div>

      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate('/progress-graph')}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          View Progress Graph
        </button>
      </div>
    </div>
  )
}

export default Experience;