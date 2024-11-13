import harry from '../assets/harry.jpg';
import codeNin from '../assets/codingNin.jpg';
import abdulBari from '../assets/abdulBari.jpg';
import neetcode from '../assets/neetCode.png';
import freeCode from '../assets/freeCode.avif';
import jenny from '../assets/jenny.jpg';

const Skills = () => {
  return (
    <div id="Skills" className="py-44 lg:px-44 md:px-40 px-[20px] text-white">
      <h1 className="text-4xl text-bold mb-28 text-center">My Sources</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        
      <div className="bg-slate-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">Code With Harry</h2>
        <img className="w-[160px] p-2" src={harry} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          <a href="https://youtu.be/5_5oE5lgrhw?si=KsLUY9qbMoYwAEVX" target="_blank" class="text-white hover:underline">Visit Channel</a>
        </span>
      </div>

      <div className="bg-slate-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">Coding Ninjas</h2>
        <img className="w-[160px] p-2" src={codeNin} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          <a href="https://www.codingninjas.com/?pageGroup=0" class="text-white hover:underline">Visit Website</a>
        </span>
      </div>

      <div className="bg-slate-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">Abdul Bari</h2>
        <img className="w-[160px] p-2" src={abdulBari} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          <a href="https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" class="text-white hover:underline">Visit Channel</a>
        </span>
      </div>

      <div className="bg-slate-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">Neetcode</h2>
        <img className="w-[160px] p-2" src={neetcode} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          <a href="https://neetcode.io/" class="text-white hover:underline">Visit Website</a>
        </span>
      </div>

      <div className="bg-slate-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">Free Code Camp</h2>
        <img className="w-[160px] p-2" src={freeCode} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          <a href="https://www.freecodecamp.org/news/learn-data-structures-and-algorithms/" class="text-white hover:underline">Visit Website</a>
        </span>
      </div>


      <div className="bg-slate-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">Jenny's Lectures</h2>
        <img className="w-[160px] p-2" src={jenny} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          <a href="https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU" class="text-white hover:underline">Visit Channel</a>
        </span>
      </div>


      </div>
    </div>
  )
}

export default Skills;