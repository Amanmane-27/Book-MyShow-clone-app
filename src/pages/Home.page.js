import React, { useState } from 'react';


//Layout
import DefaultLayout from "../layout/Default.layout";

// // components
import EntertainmentCard from '../Components/Entertainment/EntertainmentCardComponent';
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../Components/posterSlider/PosterSlider.component';


const Homepage = () => {
  const [recomendedMovies  , setRecommendeedMovies] = useState([]);
  const [premierMovies     , setPrimierMovies     ] = useState([]);
  const [onlineStreamEvents,setOnlineStreamEvents ] = useState([]);

return (
  <>
  
  <HeroCarousel/>

  <div className = " container mx-auto px-4 md:px-12 my-8 ">
    <h1 className= 'text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3' > The best of Entertainment </h1>
    <EntertainmentCard/>
  </div>

  <div className='container mx-auto px-4 md:px12 my-8 '>
    <PosterSlider 
     title='Recommaned Movies'
     subject="List of recommaned movies"
     posters ={recomendedMovies} 
     isDark =  {false}
    />
  </div>
  <div className="bg-premier-800 py-12" >
    <div className ="container mx-auto px-4 md:px-12 my-8">
      <div className="hidden md:flex">
        <img src="" alt="Rupay" className="w-full h-full"/>
      </div>
      <PosterSlider
      title="premiers"
      subject ="brand new releases every friday "
      posters = {premierMovies}
      isDark = {true}
      />
    </div>
  </div>
  <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3 '>
    <PosterSlider
    title ="Online Streaming Event"
    subject ="online stream Event "
    poster={onlineStreamEvents}
    isDark={false} 
    />
  </div>

  </>
  
)  
};

export default DefaultLayout(Homepage);
