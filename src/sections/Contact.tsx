import profile from "../assets/profie.jpg"
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaViber,
} from 'react-icons/fa';
import { Element } from "react-scroll";
import MessageForm from "../components/MessageForm";
import {motion} from "framer-motion"
import texture from "../assets/dark-mosaic.png"
function Contact() {
  return (
    <Element name="contact" className="w-full flex justify-center pt-8 "
       >
        <div className="w-full  flex flex-col items-center   "
            
     >
        <h2 className="text-white  text-2xl font-bold text-center md:hidden">Meet Your Project Partner</h2>
        <div className="w-full" style={{ backgroundImage: `url(${texture})`,backgroundRepeat : 'repeat' }}>
            <div className="  grid grid-cols-1 justify-center  md:grid-cols-2  px-8 py-16 gap-4
        bg-gradient-to-b from-black  via-blue-500/10 to-black "
       
        
        >
            <motion.div
            initial={{opacity: 0 ,x: -50}}
            whileInView={{opacity: 1,x : 0}}
            viewport={{ once: true, amount: 0.6 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
            className="   flex justify-center md:justify-end  " 
            >
                <div className="bg-white/5   p-2 rounded-2xl border border-white/10">
                    <img src={profile} alt="John Anthony solana Profile" loading="lazy" className="w-full h-full  max-h-[400px] rounded-xl" />
                </div>
            </motion.div>

            <motion.div
            initial={{opacity: 0 ,x: 50}}
            whileInView={{opacity: 1,x : 0}}
            viewport={{ once: true, amount: 0.6 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full  ">
                 <h2 className="text-white text-3xl font-bold  hidden md:block lg:text-4xl">Meet Your Project Partner</h2>
                 <h2 className=" text-2xl text-gray-300 text-center font-medium md:text-left md:mt-2">John Anthont Solana</h2>
                          <p className=" text-gray-400 mt-2 text-center font-secondary md:text-left ">Full stack web Developer based in Phillippines</p>
                          <div className="w-full flex justify-center gap-4 text-4xl text-gray-500 mt-8 md:justify-start">
                    <a href="https://linkedin.com" aria-label="go to linkin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="" />
                    </a>
                    <a href="https://facebook.com" aria-label="go to whats app" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="https://github.com" aria-label="go to Github" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://instagram.com" aria-label="go to viber" target="_blank" rel="noopener noreferrer">
                        <FaViber />
                    </a>

                 </div>
                    <div className="w-full flex flex-col gap-3  mt-8 md:mt-4  md:px-0 ">
                        <div>
                            <p className="text-gray-400 font-secondary">Phone:</p>
                            <h2 className="text-gray-300  mt-1  max-[320px]:text-lg sm:text-xl">+639554368437</h2>
                        </div>
                        <div>
                            <p className="text-gray-400 font-secondary">Email:</p>
                            <h2 className="text-gray-300  mt-1  wrap-break-word text-lg sm:text-xl">johnanthonysolana@gmail.com</h2>
                        </div>
                        <div>
                            <p className="text-gray-400 font-secondary">Location:</p>
                            <h2 className="text-gray-300 text-lg mt-1 sm:text-xl">Mindanao,Philippines</h2>
                        </div>
                </div>
            </motion.div>
          
        </div>
        </div>

        <Element
         name="messageform" 
         className="w-full  mt-16 flex flex-col items-center gap-16 lg:flex-row lg:justify-center lg:items-start sm:w-[90%] pb-32"
          >
           <motion.div 
           initial={{opacity: 0 ,x: -50}}
            whileInView={{opacity: 1,x : 0}}
            viewport={{ once: true, amount: 0.6 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
           className="w-[95%]">
            <h2 className="text-gray-300 text-2xl font-bold xl:text-5xl  border-l-6 border-ctmblue pl-4 sm:text-3xl "> 
            Let's Build Something Together</h2>
            <p className="text-gray-400 font-secondary  mt-4 lg:text-lg italic ">Tell me about your project — I’m here to help bring it to life.</p>
           </motion.div>
          <motion.div
          initial={{opacity: 0 ,x: 50}}
            whileInView={{opacity: 1,x : 0}}
            viewport={{ once: true, amount: 0.6 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex justify-center ">
              <MessageForm/>

          </motion.div>
      
        </Element>
    </div>
    </Element>
  )
}

export default Contact
