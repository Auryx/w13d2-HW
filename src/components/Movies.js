import Movie from './Movie'
const Movies = (props) => {

    return <div className="movies_container">
        {/* {props.first.map((item, index) => (<h2 key={index}>{item}</h2>))} */}
        <ul className="movie">
            {props.movies.map((item, index) =>
            <li><Movie movie={item}/></li>
            )}
        </ul>
    </div>
};

export default Movies;