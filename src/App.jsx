
import Home from "./components/home/Home"
import MovieDetails from "./components/moviecart/MovieDetails";
import { Routes, Route } from "react-router-dom";
import FavoritesPage from "./components/favorites/favorites"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Favorites" element={<FavoritesPage/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </>
  )
}

export default App
