import FastMarquee from "react-fast-marquee";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiMysql,
  SiTypescript ,
  SiNodedotjs,
  SiTailwindcss,
  SiPostman ,
  SiFirebase,
  SiCanva 
} from 'react-icons/si';


import type { IconType } from 'react-icons';


function IconMarquee() {
type IconItem = {
  icon: IconType;
  name: string;
};
   const Icons: IconItem[] = [
  { icon: FaReact, name: "React" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaJsSquare, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiNodedotjs, name: "Express JS" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiCanva, name: "Canva" },
];
  return (
    

    <div className="w-full py-4 mt-8 md:w-[90%] lg:w-[80%] lg:mt-8 outline-none  " >
       <FastMarquee speed={40} gradient={true} gradientColor="black" gradientWidth={100}  autoFill={true} >
       <div className="flex gap-8 mr-8">
         {Icons.map((Icon,index)=>(
            <span key={index} className="flex  items-center gap-2 select-none">
              <Icon.icon className="text-white/50" size={36}/>
              <span className='text-[1rem] lg:text-[1rem] text-white/30 '>{Icon.name}</span>
            </span>
        ))}
       </div>
       </FastMarquee>
    </div>
  );
}

export default IconMarquee;
