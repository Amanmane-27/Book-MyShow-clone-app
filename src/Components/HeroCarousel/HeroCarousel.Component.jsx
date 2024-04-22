import React ,{useState} from "react";
import HeroSlider from "react-slick"

const HeroCarousel = () => {
  const [images,setImages] = useState([
    {
      img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00395030-cyqbygkaxp-portrait.jpg"
    },
    {
      img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00390766-rgyexvddkl-portrait.jpg"
    }
  ])
  return (
  <>
  <div className="lg:hidden">
    <div>Small
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00395030-cyqbygkaxp-portrait.jpg" alt="" />
    </div>
    <HeroSlider>
    {
      images.map((x,image) => {
        <div className="w-full h-56 md:h-80 py-3 "> 
        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00390766-rgyexvddkl-portrait.jpg" alt="hero Banner for" className=" w-full h-full rounded-md object-cover " />
        </div>
      })
    }
    </HeroSlider>
  </div>

  {/* <div className="bg-premier-800 py-12" >
    <div className ="container mx-auto px-4 md:px-12 my-8">
      <div className="hidden md:flex">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00395030-cyqbygkaxp-portrait.jpg" alt="Rupay" className="w-full h-full"/>
      </div>
      </div>
      </div> */}

  <div className="hidden lg:block">
    <div>large</div>
  <HeroSlider>
    {
      images.map((x,image) => {
        <div className="w-full h-96 px-2 py-3 "> 
        <img src={images[image]} alt="hero Banner for large" className=" w-full h-full rounded-md object-cover " />
        </div>
      })
    }
    </HeroSlider>
  </div>
  
  </>
);
};

export default HeroCarousel;
