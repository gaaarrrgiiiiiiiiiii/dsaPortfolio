
import homejpg from '../assets/home.gif';
import { GrUserExpert } from "react-icons/gr";

const About = () => {



  return (
    <div id="About" className="py-28 lg:px-44 px-[20px] text-white">
      <h2 className="text-4xl text-bold mb-28 text-center">Topics Covered</h2>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center gap-36">
        <img className="h-[20rem] lg:w-[28%] rounded-full mb-9" src={homejpg} alt="" />
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[40px]'>
          
          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]' >
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Arrays</h2>
           
          </div>
          

          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Linked List</h2>
            
          </div>


          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Stacks</h2>
          </div>


          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Queues</h2>
          </div>
          {/* New data structures */}
          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Trees</h2>
          </div>
          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Graphs</h2>
          </div>
          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Hash</h2>
          </div>
          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Heap</h2>
          </div>
          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Searching</h2>
          </div>
          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Sorting</h2>
          </div>
          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>DP</h2>
          </div>
          <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center w-[120px]'>
            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
            <h2 className='text-[17px] font-bold'>Greedy</h2>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;