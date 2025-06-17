import { services } from "../assets/DataContent/ServicesData";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

function Abouts() {

  return (
    <Element name="services" className="w-full flex flex-col items-center  py-24  bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent">
      
      {/* Animated Section Header */}
      <div
        
        className="w-[90%] sm:w-[70%] md:w-[90%] xl:w-[80%]  "
      >
        <motion.h2 
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true, amount: 0.6 }} // triggers once when 60% in view
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="text-gray-300 text-2xl font-bold xl:text-5xl border-l-6 border-ctmblue pl-4 sm:text-3xl">
          Services Offered
        </motion.h2>
        <motion.p
        initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true, amount: 0.6 }} // triggers once when 60% in view
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="text-gray-400 font-secondary italic mt-2 lg:text-lg">
          Offering practical web development services to get your ideas online — fast, functional, and reliable.
        </motion.p>
      </div>

      {/* Animated Service Cards */}
      <div className="w-[90%] flex flex-col gap-4 mt-12 sm:w-[70%] md:w-[90%] md:mt-16 md:grid md:grid-cols-2 lg:grid-cols-3 xl:w-[80%] ">
       {services.map((data, index) => (
  <motion.div
    key={data.headline}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="w-full bg-white/5 p-6 rounded-xl grid grid-cols-3 grid-rows-2 max-[330px]:p-4 sm:p-8 border border-white/10 shadow shadow-white/30"
  >
    <span  className="w-full flex justify-end items-center text-6xl col-start-3 max-[330px]:text-5xl text-gray-400">
      {<data.icon  />}
    </span>
    <h2 className="text-gray-300 text-xl flex items-center font-medium row-start-1 col-span-2 max-[330px]:text-lg sm:text-2xl md:text-xl lg:text-2xl">
      {data.headline}
    </h2>
    <p className="text-gray-400 font-secondary col-span-3 mt-2 md:mt-0 max-[330px]:text-xs lg:mt-2 xl:mt-4">
      {data.subheadline}
    </p>
  </motion.div>
))}

      </div>
    </Element>
  );
}

export default Abouts;
