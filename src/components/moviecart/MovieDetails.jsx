import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import "./MovieDetails.css"
import Navbar from "../navebar/Navbar"
export default function MovieDetails(){
    const[movie,setMovie]=useState(null)
    const [videos, setVideos] = useState([]);

    const{id}=useParams();
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                accept: "application/json"
            }
            })
            .then((res) => res.json())
            .then((data) => {
                setVideos(data.results);
            })
            .catch((error) => {
                console.log("VIDEO ERROR:", error);
            });
    }, [id]);


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}` ,
            {
                headers:{Authorization:`Bearer ${import.meta.env.VITE_TMDB_TOKEN}`, accept:"application/json" }
            })
            .then((res)=>res.json())
            .then((data)=>{
                setMovie(data);
            })
            .catch((error)=>{
                console.log(error);
            })
    },[id])
    const hours = movie ? Math.floor(movie.runtime/60):0;
    const minutes = movie? movie.runtime % 60:0
    const trailer = videos.find((video) => video.site === "YouTube" && video.type === "Trailer");
    return(
        <>
        <Navbar/>
                {movie &&       
                <div className=" main-details py-5"  style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
                    <div className="movie-details" style={{}}>
                        <div className="movie-card row  align-items-center  ">
                            <div className=" movie-poster col-md-4">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            </div>
                            <div className="container movie-body col-md-8 ">
                                <h3>{movie.title}</h3>
                                <div className="movie-info">
                                    <span>⭐ {movie.vote_average.toFixed(1)}</span>
                                    <span>{movie.release_date}</span>
                                </div>
                                <p>{movie.overview}</p>
                                <div className="d-flex flex-wrap gap-2 genres">
                                    {movie.genres.map((genre) => (
                                        <span key={genre.id} className="badge bg-primary align-items-center" > {genre.name} </span>
                                    ))}
                                </div>
                                    <p>
                                        Runtime: {hours}h{" "} {minutes}m
                                    </p>
                                    {trailer && (
                                        <div className="trailer mt-4">
                                            <h4>Trailer</h4>
                                            <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${trailer.key}`} title={trailer.name} allowFullScreen ></iframe>
                                        </div>
                                    )}
                                    <Link to="/" className="btn btn-primary mt-3">back to home</Link>
                            </div>
                        </div>
                    </div>
            </div>

                    }

        </>
    )
}
