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
       <FastMarquee speed={40} gradient={false} direction="right" autoFill={true}    >
        {thumbnail1.map((img,index)=>(
           <div key={index} className="min-w-[300px] p-1">
  <img
    loading="lazy"
    src={img}
    alt={`Thumbnail ${index}`}
    className="h-[40vh] w-full object-cover rounded-2xl"
  />
</div>

           
        ))}


       </FastMarquee>
             <FastMarquee speed={40} gradient={false} direction="left" autoFill={true}    >
        {thumbnail2.map((img,index)=>(
           <div key={index} className="min-w-[400px] p-1">
  <img
    loading="lazy"
    src={img}
    alt={`Thumbnail ${index}`}
    className="h-[40vh] w-full object-cover rounded-2xl"
  />
</div>

           
        ))}

       </FastMarquee>
      
    </div>
  );
}

export default ThumbnailMarquee;
