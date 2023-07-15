const WachedMovies = ({wachedMovies}) => {
  return(
  <>

  {wachedMovies.map((movie)=> {
    return(
    <ul className="wached-movies">
      <div className="wached">
        <div>
        <img src={movie.Poster} alt={movie.imdbID}/>
      </div>
      <div>
         <h1>{movie.Title}</h1>
         <h3>{movie.Year}</h3>
      </div>
      </div>
      <div className="wached-rating">
        <div> <h4> ⭐ {movie.imdbRating}</h4></div>
        <div><h4>🙍‍♀️ {movie.userRating}</h4></div>
        <div><h4>⏱️ {movie.runtime} min</h4></div>
      </div>



    </ul>)

  })}
  </>
  )
};
export default WachedMovies;


// runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
