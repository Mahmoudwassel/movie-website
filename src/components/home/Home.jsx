import Hero from "../hero/Hero.jsx"
import Navbar from "../navebar/Navbar"
import MovieCard from "../moiecard/MovieCard.jsx"
import { useEffect,useState } from "react";


export default function Home(){
    const[movies , setMovies]=useState([]);
    useEffect(()=>{

    },[])
    return(
        <div className="">
            <Navbar/>
            <Hero/>
            <h1>this is home page</h1>
            <div className="container">
                <div className="row g-2 mb-2">
                    {movies.map((movie)=>{
                        return(
                            <div  className="col-lg-4 col-md-6 col-sm-6" key={movie.title}>
                                <MovieCard title={movie.title} rating={movie.rating} image={movie.image}/>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
                    // <div  className="col-lg-4 col-md-6 col-sm-6">
                    //     <MovieCard title="Interstellar" rating="8.7" image="images/heroback.jpg"/>
                    // </div>
                    // <div className="col-lg-4 col-md-6 col-sm-6">
                    //     <MovieCard title="Inception" rating="8.8" image="images/heroback.jpg"/>
                    // </div>
                    // <div className="col-lg-4 col-md-6 col-sm-6">
                    //     <MovieCard title="Avatar" rating="7.8" image="images/heroback.jpg"/>
                    // </div>
                    // <div className="col-lg-4 col-md-6 col-sm-6">
                    //     <MovieCard title="Avatar" rating="7.8" image="images/heroback.jpg"/>
                    // </div>
                    // <div className="col-lg-4 col-md-6 col-sm-6">
                    //     <MovieCard title="Avatar" rating="7.8" image="images/heroback.jpg"/>
                    // </div>