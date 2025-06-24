import { useEffect, useRef, useState } from "react"
import logo from "../assets/jarslogo.webp"
import { Link } from "react-scroll"

 export const nav : string [] = ['home','services','contact']
function Headers() {
  const [isOpen,setisOpen] = useState<boolean>(false)

  const headerRef = useRef <HTMLDivElement>(null)

useEffect(()=>{
      const handleClickOutside = (e:MouseEvent)=>{
        if(headerRef.current && !headerRef.current.contains(e.target as Node)){
          setisOpen(false)
        }
        

      }
      if(isOpen){
        document.addEventListener('mousedown', handleClickOutside)
      }else{
        document.removeEventListener('mousedown', handleClickOutside)
      }
      return ()=> {
        document.removeEventListener('mousedown', handleClickOutside)}
    },[isOpen])

    const GotoPortfolio = ():void =>{
       window.open("https://jarsportfolio.vercel.app/", "_blank", "noopener,noreferrer");
    }

 
  return (
    <header ref={headerRef} className="w-[85%] py-3 px-4 fixed bg-white/10 border border-white/10 backdrop-blur-md shadow-lg mt-5 rounded-2xl z-50 md:w-[70%] lg:py-2 lg:w-[70%] xl:w-[60%]">
        <div className="w-full flex flex-col  lg:flex-row lg:justify-between lg:items-center ">

           <div className=" flex items-center justify-between">
            
             <div className="flex items-center gap-1">
               <img className="h-[2.1rem] rounded-md shadow-md shadow-black/50" src={logo} alt="john anthony solana logo" />
               <h1 className="text-white text-2xl font-black font-logo lg:text-3xl ">ars.</h1>
            </div>

            <div  className="flex flex-col gap-2 lg:hidden  "
                 onClick={()=>setisOpen(!isOpen)}>
                <span
                 className={`w-[2rem] h-1 bg-gray-300 transition-transform duration-300 ${isOpen? 'rotate-45 translate-y-1 bg-red-500':''} `} />
                <span
                className={`w-[2rem] h-1 bg-gray-300 transition-transform duration-300 ${isOpen? '-rotate-45 -translate-y-2 bg-red-500':''}`} />
            </div>

           </div>

            <nav>
                <ul className={`transition-all duration-300 ease-in-out overflow-hidden  ${isOpen? 'flex flex-col  mt-8 font-medium text-xl   opacity-100' : 'max-h-0 opacity-0'} capitalize lg:mt-0 lg:flex lg:flex-row lg:items-center lg:max-h-full lg:opacity-100  text-white`}>
                    {nav.map((li)=>(
                       <li key={li} className="ml-4 py-2 text-xl font-medium cursor-pointer transition-all ease-in duration-300 hover:text-ctmblue">
  <Link  to={li} smooth={true} duration={700} spy={true}>
    {li}
  </Link>
</li>

                    ))}
                </ul>
            </nav>

            <button onClick={GotoPortfolio} className={`${isOpen? 'block mt-4 bg-ctmblue text-gray-300' : 'hidden'} lg:mt-0 lg:bg-white lg:text-gray-900 font-medium px-4 py-2 rounded-xl lg:block outline-0 transition-all ease-in duration-300 hover:bg-ctmblue hover:text-white cursor-pointer  `}>View Portpolio</button> 
    


        </div>
    </header>
  )
}

export default Headers
