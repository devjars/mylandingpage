
  import { services } from "../assets/DataContent/ServicesData";
import { Element } from "react-scroll";
  function Abouts() {
    return (
      <Element name='services' className="w-full flex flex-col items-center pt-32  ">
         <div className="w-[90%] sm:w-[70%]  md:w-[90%]  xl:w-[80%]  ">
           <h1 className="text-gray-300 text-2xl font-bold xl:text-5xl  border-l-6 border-ctmblue pl-4 sm:text-3xl ">Services Offered</h1>
          <p className="text-gray-400 font-secondary italic mt-2 lg:text-lg ">Offering practical web development services to get your ideas online — fast, functional, and reliable.</p>
         </div>

          <div className="w-[90%]  flex flex-col gap-4 mt-12 sm:w-[70%] 
          md:w-[90%] md:mt-16   md:grid md:grid-cols-2  lg:grid-cols-3 xl:w-[80%] bg-gradient-to-tr from-black/ via-blue-500/5 to-black/10  ">
          {services.map((data,index)=>(
              <div key={index} className="w-full bg-white/5 p-6 rounded-xl grid grid-cols-3 grid-rows-2  max-[330px]:p-4 sm:p-8 border border-white/10 shadow shadow-white/30 ">
         <span className="w-full flex justify-end items-center text-6xl  col-start-3  max-[330px]:text-5xl text-gray-400  ">{<data.icon/>}</span>
                          <h1 className="text-gray-300 text-xl flex items-center  font-medium row-start-1 col-span-2 max-[330px]:text-lg max-[330px]:wrap-anywhere sm:text-2xl md:text-xl lg:text-2xl ">{data.headline}</h1>
                          <p className="text-gray-400 font-secondary    col-span-3 mt-2 md:mt-0 max-[330px]:text-xs  lg:mt-2 xl:mt-4  ">{data.subheadline}</p>
                  </div>
          ))}
                  
          </div>

    

      
      </Element>
    )
  }

  export default Abouts
