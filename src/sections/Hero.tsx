import { FaEnvelope  } from 'react-icons/fa';
import textureimg from "../assets/dark-wood.webp";
import { Element,Link } from 'react-scroll';
import {motion} from "framer-motion"
function Hero() {
  return (
  <Element name='home' className="w-full  flex flex-col items-center  ">

    <div className='w-[98%] flex justify-center overflow-y-hidden lg:w-[98%] lg:rounded-4xl  '
      style={{ backgroundImage: `url(${textureimg})`,backgroundRepeat : 'repeat' }} >

   <div
   
          className='w-full pt-32 pb-8  flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-500/20 to-black  px-8 sm:px-12 lg:px-24 lg:via-black/30 lg:to-blue-500/40 lg:pb-32 xl:px-52 lg:pt-44 overflow-y-hidden'>
   
     <div className=" bg-gradient-to-t from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg
        flex justify-center items-center text-white gap-2 p-2 pr-5 font-semibold min-w-[200px] ">
          <p className="bg-ctmblue  px-3 rounded-xl shadow-md shadow-black/50 text-sm lg:text-xl">Now</p>

            <h2 className='text-sm text-center lg:text-xl '>Available for Work</h2>
        </div>

        <motion.div
            initial={{opacity: 0 ,y: 50}}
            whileInView={{opacity: 1, y : 0}}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className=' grid place-items-center mt-12 text-center lg:mt-16  '>
          <h1 className='text-3xl font-bold uppercase text-gray-300  text-shadow-2xs text-shadow-black sm:text-4xl md:text-6xl lg:text-7xl'>
Crafting Sites That Look Good & Work Great.</h1>
          <h2 className='text-gray-300 mt-8 text-base lg:text-2xl lg:mt-12'>Looking for a reliable web developer for your next project? I’m here to help.</h2>
       <Link to="messageform" smooth={true} duration={700} offset={-100}>
  <button
    className="flex items-center bg-gray-200 py-2 px-6 text-gray-900 text-xl gap-2 rounded-lg mt-16 
               transition-all duration-300 hover:bg-gray-300 hover:scale-105
               lg:bg-black lg:text-gray-300 lg:hover:bg-gray-800 max-[350px]:text-sm cursor-pointer"
    aria-label="Contact me"
  >
    <FaEnvelope className="text-green-500" />
    Let's work together
  </button>
</Link>

        </motion.div>
   </div>

        
    </div>
    
    </Element>
  )
}

export default Hero
