import { useState } from "react"
import logo from "../assets/j-high-resolution-logo (2) (1).webp"
import { Link } from "react-scroll"

 export const nav : string [] = ['home','services','contact']
function Header() {
  const [isOpen,setisOpen] = useState<boolean>(false)

 
  return (
    <div className="fixed flex justify-center mt-5 w-full z-50 max-w-[1440px] ">
     <div className="w-[90%] flex flex-col gap-4  py-3 px-4 bg-gradient-to-t from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg sm:w-[80%] md:w-[70%] lg:flex-row lg:justify-between lg:items-center lg:gap-0 ">

     <div className=" flex justify-between items-center">
      <div className="flex items-center gap-1">
        <img className="h-[2.2rem] rounded-md shadow-md shadow-black/50" src={logo} alt="john anthony solana logo" />
        <h1 className="text-white text-2xl font-black font-logo lg:text-3xl ">ars.</h1>
      </div>
      <div  className="flex flex-col gap-2 lg:hidden  "
      onClick={()=>setisOpen(!isOpen)}>
        <span className={`w-[2rem] h-1 bg-gray-300 transition-transform duration-300 ${isOpen? 'rotate-45 translate-y-1 bg-red-800':''} `} />
               <span className={`w-[2rem] h-1 bg-gray-300 transition-transform duration-300 ${isOpen? '-rotate-45 -translate-y-2 bg-red-800':''} `} />

      </div>
     </div>

     <ul className={` ${isOpen? 'flex' : 'hidden'} flex-col gap-3 ml-4  mt-4 lg:m-0 lg:flex lg:flex-row lg:items-center lg:gap-4`}>
      {nav.map((li)=>(
          <li className="text-xl font-primary  text-white capitalize cursor-pointer transition-all ease-in duration-300 hover:text-ctmblue" key={li}>{li}</li>
        ))}
     </ul>
     
   <button className={`${isOpen? 'block' : 'hidden'} bg-white font-medium px-4 py-2 rounded-xl lg:block outline-0 transition-all ease-in duration-300 hover:bg-ctmblue hover:text-white cursor-pointer  `} 
   aria-label="See Portfolio">My Portpolio</button> 
    

        </div>

      
    </div>
  )
}

export default Header
