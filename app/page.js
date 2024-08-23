import Image from "next/image";
import Carousels from "./components/Carousel";
import Explore from "./components/Explore";
import Subfooter from "./components/Subfooter";
import OurObjective from "./components/OurObjective";

export default function Home() {
  return (
   <div>
   <Carousels/>
   <div className="relative">
    <Explore/>
    <Subfooter/>
    <OurObjective/>
    
   </div>
   </div>
  );
}
