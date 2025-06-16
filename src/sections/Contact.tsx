import profile from "../assets/profie.jpg"
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaViber,
} from 'react-icons/fa';
import { Element } from "react-scroll";
import MessageForm from "../components/MessageForm";
function Contact() {
  return (
    <Element name="contact" className="w-full px-8 flex flex-col items-center pt-20 bg-gradient-to-b from-black/5 via-blue-500/10 to-black/5">
        <h1 className="text-white  text-2xl font-bold text-center md:hidden">Meet Your Project Partner</h1>
        <div className=" grid grid-cols-1 justify-items-center mt-8 md:grid-cols-2 gap-4">
            <div className=" bg-white/5  p-2 rounded-2xl border border-white/10 ">
                <img src={profile} alt="John Anthony solana Profile" className="w-full h-full  max-h-[400px] rounded-xl" />
            </div>

            <div className="w-full ">
                 <h1 className="text-white text-3xl font-bold  hidden md:block lg:text-4xl">Meet Your Project Partner</h1>
                 <h1 className=" text-2xl text-gray-300 text-center font-medium md:text-left md:mt-2">John Anthont Solana</h1>
                          <p className=" text-gray-400 mt-2 text-center font-secondary md:text-left ">Full stack web Developer based in Phillippines</p>
                          <div className="w-full flex justify-center gap-4 text-4xl text-gray-500 mt-8 md:justify-start">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaViber />
                    </a>

                 </div>
                    <div className="w-full flex flex-col gap-3  mt-8 md:mt-4  md:px-0 ">
                        <div>
                            <p className="text-gray-400 font-secondary">Phone:</p>
                            <h1 className="text-gray-300  mt-1  max-[320px]:text-lg sm:text-xl">+639554368437</h1>
                        </div>
                        <div>
                            <p className="text-gray-400 font-secondary">Email:</p>
                            <h1 className="text-gray-300  mt-1  wrap-break-word text-lg sm:text-xl">johnanthonysolana@gmail.com</h1>
                        </div>
                        <div>
                            <p className="text-gray-400 font-secondary">Location:</p>
                            <h1 className="text-gray-300 text-lg mt-1 sm:text-xl">Mindanao,Philippines</h1>
                        </div>
                </div>
            </div>
          
        </div>

        <Element name="messageform" className="w-full  mt-32 flex flex-col items-center gap-16 lg:flex-row lg:justify-center lg:items-start sm:w-[90%] pb-32">
           <div className="w-[95%]">
            <h1 className="text-gray-300 text-2xl font-bold xl:text-5xl  border-l-6 border-ctmblue pl-4 sm:text-3xl "> 
            Let's Build Something Together</h1>
            <p className="text-gray-400 font-secondary  mt-4 lg:text-lg italic ">Tell me about your project — I’m here to help bring it to life.</p>
           </div>
          <div className="w-full flex justify-center ">
              <MessageForm/>

          </div>
      
        </Element>
    </Element>
  )
}

export default Contact
