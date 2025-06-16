import profile from "../assets/profie.jpg"
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLaptopCode,
  FaRocket ,
  FaHandshake ,
   
     
} from 'react-icons/fa';
import { HiOutlineChartBar } from 'react-icons/hi';
import { BiDevices } from 'react-icons/bi';
import { MdDevices } from 'react-icons/md';
import  Player  from 'lottie-react';

import Rocketanimation from "../assets/rocket.json"
import Responsive from "../assets/responsive.json"
import CustomeDev from "../assets/customdev.json"
import Optimization from "../assets/optimizaion.json"
import Handshake from "../assets/handshake.json"





function Abouts() {
  return (
    <div className="w-full  flex flex-col items-center ">

        <div className="w-[90%] sm:w-[70%] md:w-[90%]  grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 lg:grid-rows-3 gap-4 ">

             <div className="w-full bg-white/5 p-8 rounded-xl flex flex-col items-center 
             md:row-start-2 md:col-start-2 md:row-end-4 md:col-end-2">
                <img src={profile} alt="john anthony solona profile" className="w-[10rem] rounded-full" />
                          <h1 className="mt-8 text-xl text-gray-300 text-center">John Anthont Solana</h1>
                          <p className=" text-gray-400 mt-4 text-center">I'm Full stack web Developer based in Phillippines</p>
                          <div className="w-full flex justify-center gap-4 text-4xl text-gray-500 mt-8">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>

                 </div>
                   <div className="w-full flex flex-col gap-3 ">
                        <div>
                            <p className="text-gray-400">Phone:</p>
                            <h1 className="text-gray-300 text-b ">+639554368437</h1>
                        </div>
                        <div>
                            <p className="text-gray-400">Email:</p>
                            <h1 className="text-gray-300 text-lg wrap-break-word">johnanthonysolana@gmail.com</h1>
                        </div>
                        <div>
                            <p className="text-gray-400">Location:</p>
                            <h1 className="text-gray-300 text-lg">Mindanao,Philippines</h1>
                        </div>
                </div>
                
            </div>

                 <div className="w-full bg-white/5  p-8 rounded-xl flex flex-col items-center
                 md:row-start-1 md:col-start-1 md:row-end-3 md:col-end-1">
                <div className="w-full  flex justify-end ">
                     <Player autoplay loop animationData={Responsive} className="w-[50%] "/>
                </div>
                <div className="w-full   flex flex-col  mt-4">
                        <h1 className="text-gray-400 text-2xl font-medium ">Modern & Responsive</h1>
                        <p className="text-gray-500 font-secondary mt-2 ">I build fully responsive websites that look stunning and perform seamlessly across all devices — from desktops to smartphones.</p>
                </div>
        {/* <MdDevices   color="white" className="text-9xl"/> */}
            </div>

            <div className="w-full bg-white/5  p-8 rounded-xl">
                  <div className="w-full flex flex-col gap-3 ">
                        <div>
                            <p className="text-gray-400">Phone:</p>
                            <h1 className="text-gray-300 text-b ">+639554368437</h1>
                        </div>
                        <div>
                            <p className="text-gray-400">Email:</p>
                            <h1 className="text-gray-300 text-lg wrap-break-word">johnanthonysolana@gmail.com</h1>
                        </div>
                        <div>
                            <p className="text-gray-400">Location:</p>
                            <h1 className="text-gray-300 text-lg">Mindanao,Philippines</h1>
                        </div>
                </div>
            </div>



             <div className="w-full bg-white/5  p-8 rounded-xl flex flex-col   items-center">
                <div className="w-full flex justify-start">
                     <Player autoplay loop animationData={Handshake} className="w-[50%] "/>
                         {/* <FaHandshake  color="white" size={100} className=""/> */}
                </div>
                <div className="w-full flex flex-col items-end text-end   mt-4 ">
                        <h1 className="text-gray-400 text-2xl font-medium ">Trusted & Reliable</h1>
                        <p className="text-gray-500 font-secondary mt-2 ">Direct, dependable, and focused on delivering exactly what you need.</p>
                </div>
            </div>
            
            <div className="w-full bg-white/5  p-8 rounded-xl flex flex-col items-center">
                <div className="w-full flex justify-start">
                     <Player autoplay loop animationData={Rocketanimation} className="w-[50%]   "/>
                      {/* <FaRocket  color="white " className="text-9xl  "/> */}
                </div>
                <div className="w-full flex flex-col items-end text-end mt-4 ">
                        <h1 className="text-gray-400 text-2xl font-medium ">Streamlined Process</h1>
                        <p className="text-gray-500 font-secondary mt-2 ">Clear communication. Fast turnaround. No fluff.</p>
                </div>
            </div>

              <div className="w-full bg-white/5 p-8 rounded-xl flex flex-col items-center">
                <div className="w-full flex justify-end">
                     <Player autoplay loop animationData={Optimization} className="w-[50%] "/>
                        {/* <HiOutlineChartBar   color="white" className="text-9xl"/> */}
                </div>
                <div className="w-full flex flex-col mt-4 ">
                        <h1 className="text-gray-400 text-2xl font-medium ">Built for Visibility</h1>
                        <p className="text-gray-500 font-secondary mt-2 ">Optimized structure and clean code to support better search engine performance.</p>
                </div>
            </div>

              <div className="w-full bg-white/5  p-8 rounded-xl flex flex-col items-center">
                <div className="w-full flex justify-end">
                     <Player autoplay loop animationData={CustomeDev} className="w-[50%] "/>
                        {/* <FaLaptopCode  color="white" className="text-9xl"/> */}
                </div>
                <div className="w-full flex flex-col  mt-4 ">
                        <h1 className="text-gray-400 text-2xl font-medium ">Custom Development</h1>
                        <p className="text-gray-500 font-secondary mt-2 ">Optimized structure and clean code to support better search engine performance.</p>
                </div>
            </div>

              <div className="w-full bg-white/5  p-8 rounded-xl flex flex-col items-center">
                <div className="w-full flex justify-end">
                     <Player autoplay loop animationData={CustomeDev} className="w-[50%] "/>
                        {/* <FaLaptopCode  color="white" className="text-9xl"/> */}
                </div>
                <div className="w-full flex flex-col  mt-4 ">
                        <h1 className="text-gray-400 text-2xl font-medium ">Custom Development</h1>
                        <p className="text-gray-500 font-secondary mt-2 ">Optimized structure and clean code to support better search engine performance.</p>
                </div>
            </div>

              <div className="w-full bg-white/5  p-8 rounded-xl flex flex-col items-center">
                <div className="w-full flex justify-end">
                     <Player autoplay loop animationData={CustomeDev} className="w-[50%] "/>
                        {/* <FaLaptopCode  color="white" className="text-9xl"/> */}
                </div>
                <div className="w-full flex flex-col  mt-4 ">
                        <h1 className="text-gray-400 text-2xl font-medium ">Custom Development</h1>
                        <p className="text-gray-500 font-secondary mt-2 ">Optimized structure and clean code to support better search engine performance.</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Abouts
