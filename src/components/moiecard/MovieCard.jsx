import "./MovieCard.css";

function MovieCard({title,rating,image}) {
    return (
        <div className="movie-card ">
            <img src={image} alt="Interstellar"/>
            <h3>{title}</h3>
            <p>⭐ {rating}</p>
            <button className="btn btn-primary"> Details</button>
        </div>

    );
}

export default MovieCard;