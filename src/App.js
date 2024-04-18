import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"
import {Routes,Route} from "react-router-dom"

import HomePage from "./pages/Home.page"
import MoviePage from "./pages/movie.page"
import PlayPage from "./pages/Play.page"

 function App() {
  return (
    <Routes>
      <Route path ="/" element ={<HomePage />}/>

      <Route path = "/movie/:id" element ={<MoviePage />}/>

      <Route path = "/plays" element ={<PlayPage/>}/>
    </Routes>
  )
}

export default App;