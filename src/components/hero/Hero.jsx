import "./Hero.css"
export default function hero(){
    return(
        <section className="hero">
            <div className="hero-overlay">
                <div className="container hero-content">
                    <h1>Interstellar</h1>
                    <div className="movie-info">
                        <span>⭐ 8.7</span>
                        <span>2014</span>
                        <span>Sci-Fi</span>
                    </div>
                    <p>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. </p>
                    <button className="btn btn-primary"> Watch Now </button>
                    <button className="btn btn-outline-light ms-2"> + Favorites </button>
                </div>
            </div>

        </section>
    )
}