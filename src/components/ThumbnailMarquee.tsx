import FastMarquee from "react-fast-marquee";
import EllpowerThumbnail from "../assets/image (4).webp"
import Stratfordhumbnail from "../assets/image (6).webp"
import EllpowerThumbnail2 from "../assets/image (8).webp"
import Stratfordhumbnail2 from "../assets/image (9).webp"
const thumbnail1 : string [] = [EllpowerThumbnail,Stratfordhumbnail]
const thumbnail2 : string [] = [EllpowerThumbnail2,Stratfordhumbnail2]



function ThumbnailMarquee() {

  return (
    

    <div className="w-full mt-4  " >
       <FastMarquee speed={40} gradient={false} direction="right"   autoFill={true} className=""  >
        {thumbnail1.map((img,index)=>(
             <img loading="lazy" key={index} src={img} alt={`Thumbnail ${index}`} className="h-[30vh] w-full object-cover md:-[40vh] lg:h-[45vh] xl:h-[50vh] rounded-2xl p-1  " />
           
        ))}


       </FastMarquee>
        <FastMarquee speed={40} gradient={false} direction="left"   autoFill={true} >
            {thumbnail2.map((img,index)=>(
             <img loading="lazy" key={index} src={img} alt={`Thumbnail ${index}`}  className="h-[30vh] w-full md:h-[40vh] lg:h-[45vh] xl:h-[50vh] p-1 rounded-2xl "  />
        ))}

           
       </FastMarquee>
    </div>
  );
}

export default ThumbnailMarquee;
