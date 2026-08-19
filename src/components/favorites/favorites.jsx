import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from "../navebar/Navbar"
import {removefromfavoit} from "../../app/action"
import "./favorites.css"


function FavoritesPage() {
    const dispatch = useDispatch();
    // جلب قائمة المفضلة من الـ Store المدمج
    const favoritsList = useSelector((state) => state.favorits);
    const handleRemoveFromFavorite = (movie) => {
        dispatch(removefromfavoit(movie) );
    };

    return (
        <div className='favor-page'>
            <Navbar/>
            <h2 className="mb-4  mt-5 text-center fav-titel">favorites filmes ❤️ </h2>
            <div className="container my-5 mt-5">
                {favoritsList.length === 0 ? (
                    <div className="text-center my-5 py-5">
                        <p className="fs-4 text-muted">Favorites list is empty now</p>
                        <Link to="/" className="btn btn-primary mt-3">show movies</Link>
                    </div>
                ) : (
                    /* عرض الأفلام في Grid متناسق */
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4  ">
                        {favoritsList.map((movie) => (
                            <div className="col" key={movie.id}>
                                <div className="card h-100 shadow-sm">
                                    <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title text-truncate">{movie.title}</h5>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <Link to={`/movie/${movie.id}`} className="btn btn-sm btn-outline-primary">Details</Link>
                                            <button className="btn btn-sm btn-danger" onClick={() => handleRemoveFromFavorite(movie)}>🗑️ </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FavoritesPage;