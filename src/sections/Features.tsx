import { features } from "../assets/DataContent/ServicesData"
import Textureimage from "../assets/dark-wood.webp"

function Features() {
  return (
    <div  className='w-full mt-16 flex justify-center lg:mt-32  '
    style={{ backgroundImage: `url(${Textureimage})`, backgroundSize: "contains",backgroundRepeat : 'repeat' }} >
        <div className="w-full flex justify-center bg-gradient-to-b from-black via-transparent to-black/90">
          <div className="w-[100%] flex flex-col items-center text-right bg-gradient-to-b from-black/5 via-blue-500/10 to-black/10 py-12 px-4" >
            <div className="w-full flex flex-col items-end pr-2 sm:pr-8 md:pr-4">
               <h1 className="text-gray-300 text-2xl font-bold xl:text-5xl  pr-4 border-r-6  border-ctmblue pl-2 sm:text-3xl">Features That Help You Grow</h1>
            <p className="text-gray-300 mt-2 font-secondary lg:text-lg italic ">
              Each site is thoughtfully crafted to boost your performance, visibility, and long-term success.</p>
            </div>

              <div className="bg-white/5 grid grid-cols-1 justify-items-center gap-4 mt-16  text-center md:grid-cols-2 lg:grid-cols-4 border border-white/30 p-2 rounded-2xl  sm:w-[90%] md:w-full lg:gap-2 xl:w-[90%] xl:gap-4">
                  {features.map((data,index)=>(
                  <div key={index} className="w-full bg-white/10 p-8 flex flex-col items-center rounded-xl border border-white/20
                  ">
                    <span className=" text-4xl w-20 h-20 flex items-center justify-center bg-white rounded-full text-ctmblue"><data.icon/></span>
                    <h1 className="text-white mt-4 text-xl font-medium max-[330px]:text-lg sm:text-2xl md:text-xl lg:text-2xl" >{data.headline}</h1>
                    <p className="text-gray-300 mt-2 font-secondary">{data.subheadline}</p>
                  </div>
                ))}
              </div>
        </div>
        </div>
    </div>
  )
}

export default Features
 