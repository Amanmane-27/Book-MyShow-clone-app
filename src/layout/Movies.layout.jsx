import React from 'react'
import MovieNavBar from '../Components/Navbar/MovieNavBar.components';

const MoviesLayout = (Component ) => ({...props}) => {
  return (

    <div>
       <MovieNavBar/>
       < Component {...props}/>
       </div>
   
  )
}

export default MoviesLayout;