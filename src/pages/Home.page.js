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
     subject="list of recommaned movies"
     posters ={recomendedMovies} 
     isDark =  {false}
     />
  </div>

  </>
  
)  
};

export default DefaultLayout(Homepage);
