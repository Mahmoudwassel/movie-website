import "./MovieCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addtofavoit} from "../../app/action"
import  Button  from "react-bootstrap/Button";



function MovieCard({movie}) {
    const dispatch = useDispatch();

    const handleAddToFavorite=()=>{
        dispatch(addtofavoit(movie))
    }
    return (
        <div className="movie-card ">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-body">
                <h3>{movie.title}</h3>
                <div className="movie-info">
                    <span>⭐ {movie.vote_average.toFixed(1)}</span>
                    <span>{movie.release_date}</span>
                </div>
                <p>{movie.overview}</p>
                <div className="bottoms">
                    <Link to={`/movie/${movie.id}`} className="btn btn-primary">Details</Link>
                    <Button  variant="outline-primary" onClick={handleAddToFavorite}>❤️ Favorite</Button>
                </div>
            </div>
        </div>
        


    );
}

export default MovieCard;