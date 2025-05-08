import codechef from '../assets/codechef.jpg';
import hackerrank from '../assets/hackerrank.png';
import elab from '../assets/elab.png';
import udemyc from '../assets/udemy.png';
import udemycpp from '../assets/udemycpp.png';
import js from '../assets/js.png';
import daa from '../assets/daa.png';

const Contact = () => {
  return (
    <div className="text-white bg-gray-900 lg:p-44 p-4" id="Contact">
      <h2 className="text-4xl textwhite text-bold mb-20 text-center">Certifications, Badges and E-lab</h2>
      <div className="lg:w-[600px] md:w-[500px] mx-auto">
        <div className="relative mt-5">


        <div className="bg-gray-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
          
          <h2 className="text-[17px] font-bold">C Language Cerificate</h2>
          <img src={udemyc} alt=""/>
          <span className="py-[1px] text-[16px] text-center">
            
          </span>
        </div>

        <div className="bg-gray-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
          
          <h2 className="text-[17px] font-bold">C++ Language Cerificate</h2>
          <img src={udemycpp} alt=""/>
          <span className="py-[1px] text-[16px] text-center">
            
          </span>
        </div>
        
        <div className="bg-gray-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">JavaScript Certificate</h2>
        <img src={js} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          
        </span>
      </div>

        <div className="bg-gray-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">Codechef</h2>
        <img src={codechef} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          
        </span>
      </div>

      <div className="bg-gray-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">Hackerrank</h2>
        <img src={hackerrank} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          
        </span>
      </div>

      <div className="bg-gray-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">Elab-DSA</h2>
        <img src={elab} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          
        </span>
      </div>

      <div className="bg-gray-900 p-[20px] rounded-xl flex flex-col items-center jsutify-center">
        
        <h2 className="text-[17px] font-bold">Elab-DAA</h2>
        <img src={daa} alt=""/>
        <span className="py-[1px] text-[16px] text-center">
          
        </span>
      </div>




         

        </div>
      </div>
    </div>
  )
}

export default Contact;