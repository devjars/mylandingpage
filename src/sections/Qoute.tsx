import { easeOut, motion } from "framer-motion"
function Qoute() {
  return (
   <motion.div
    initial={{opacity : 0, y: 30}}
    whileInView={{opacity: 1, y: 0}}
     viewport={{ once: true, amount: 0.6 }} 
    transition={{duration : 0.9, ease : easeOut}}
   className="w-full bg-black py-24 px-4 flex flex-col items-center justify-center text-center ">
  <blockquote className="text-2xl sm:text-3xl md:text-4xl text-gray-200 font-semibold italic max-w-4xl">
    "Your website is the silent ambassador of your brand."
  </blockquote>
  <p className="text-gray-400 mt-4 text-sm sm:text-base">— Paul Rand</p>
</motion.div>

  )
}

export default Qoute
