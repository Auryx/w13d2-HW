// the component function
const Movie = (props) => {
    return <div className="movie_container"> 
        <h3>{props.movie.name}</h3>
        <p>{props.movie.rating}</p>
        <p>{props.movie.year}</p>
        <img src={props.movie.image} alt={props.movie.name}></img>
    </div>
}

export default Movie
// Oddly suspiscious amount of working red underlines.
// If you can message me about how to fix them, I would very much appreciate that