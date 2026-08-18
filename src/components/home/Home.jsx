import Hero from "../hero/Hero.jsx"
import Navbar from "../navebar/Navbar"
import MovieCard from "../moviecart/MovieCard.jsx"
import { useEffect,useState } from "react";
import "./Home.css"


export default function Home(){
    const[movies , setMovies]=useState([]);
    const[page,setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [retry, setRetry] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            setPage(1);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [search]);

    useEffect(() => {
        const controller = new AbortController();
        
        const url = debouncedSearch
        ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(debouncedSearch)}&page=${page}`
        : `https://api.themoviedb.org/3/movie/popular?page=${page}`;
        setError("");
        setLoading(true);
        fetch(url, {
            headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            accept: "application/json",
            },
            signal:controller.signal,
        })
            .then((response) => {
                    if (!response.ok) {
                            throw new Error("Failed to fetch movies");}
                            return response.json(); 
                        })
            .then((data) => {
            setMovies(data.results);
            setTotalPages(data.total_pages);
            })

            .catch((error) => {
                if (error.name !== "AbortError"){
                    setMovies([]);
                    setError("Something went wrong. Please try again.");
                }
            })



            .finally(() => {
                setLoading(false);
            });
            return()=>{
                controller.abort();
            }
        }, [page , debouncedSearch ,retry]);
    return(
        <div className="mt-5">
            <Navbar/>
            <Hero/>
            <div className=" home-movies">
                <div className="container">
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for a movie..."
                            value={search}
                            onChange={(e) => {setSearch(e.target.value);setPage(1)} }
                        />
                        {error && (
                            <div>
                                <div className="alert alert-danger text-center"> {error}</div>
                                <button className="btn btn-primary" onClick={()=>setRetry((prev)=>prev + 1)}>Retry</button>
                            </div>
                            )}
                    </div>
                    <div className="row g-2 pb-4">
                            {loading && (
                                <div className="text-center my-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}
                            {!loading && movies.length === 0 && (
                                <h3 className="text-center my-5">
                                    No movies found
                                </h3>
                            )}
                            {movies.map((movie)=>{
                            return(
                                <div  className="col-lg-4 col-md-6 col-sm-6" key={movie.id}>
                                    <MovieCard movie={movie} />
                                </div>
                            )
                        })}
                        <div className="d-flex justify-content-center gap-3 my-4">
                            <button className="btn btn-secondary" onClick={() => setPage(page - 1)} disabled={page === 1} > Previous </button>
                            <span className="align-self-center"> Page {page} </span>
                            <button className="btn btn-primary" onClick={() => setPage(page + 1)} disabled={page===totalPages} >Next</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
