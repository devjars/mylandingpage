  import {
  FaLaptopCode,
  FaRocket ,
    FaSearch,
  FaUniversalAccess,
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import { BiDevices,BiBug } from 'react-icons/bi';
import { MdUpdate } from 'react-icons/md';
import { TbRocket } from 'react-icons/tb';



import type { IconType } from "react-icons";


type service = {
    headline : string,
    subheadline : string,
    icon : IconType 
}


export const services: service[] = [
  {
    headline: "Website Development",
    subheadline: "Custom-built websites from the ground up — landing pages, portfolios, or business sites.",
    icon: FaLaptopCode,
  },
  {
    headline: "Bug Fixing & Debugging",
    subheadline: "Fixing layout issues, broken features, or performance bugs in existing websites.",
    icon: BiBug,
  },
  {
    headline: "UI Enhancements",
    subheadline: "Improving visual design, user experience, and interaction to make your site more effective.",
    icon: HiOutlineSparkles,
  },
  {
    headline: "Responsive Conversion",
    subheadline: "Making your existing website mobile-friendly and fully responsive across all screen sizes.",
    icon: BiDevices,
  },
  {
    headline: "Website Optimization",
    subheadline: "Speed improvements, code clean-up, and SEO adjustments for better performance and ranking.",
    icon: TbRocket,
  },
  {
    headline: "Site Maintenance & Updates",
    subheadline: "Regular updates, content changes, and tech fixes to keep your site running smoothly.",
    icon: MdUpdate,
  },
];




export const features = [
  {
    headline: "Optimized Performance",
    subheadline: "Fast-loading websites that keep users engaged and reduce bounce rates.",
    icon: FaRocket,
  },
  {
    headline: "SEO-Ready",
    subheadline: "Clean structure and semantic code to help you rank better on search engines.",
    icon: FaSearch,
  },
  {
    headline: "Responsive by Design",
    subheadline: "Your site will look and work great on all screen sizes — from phones to desktops.",
    icon: BiDevices,
  },
  {
    headline: "Accessible for All",
    subheadline: "Built with inclusivity in mind, ensuring smooth navigation for users of all abilities.",
    icon: FaUniversalAccess,
  },
  
];
