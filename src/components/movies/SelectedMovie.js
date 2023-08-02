import { useEffect, useState } from "react";
import StarRating from "../StarRating";

const SelectedMovie = ( {selectedId} ) => {
  const [movie, setMovie] = useState({})

  useEffect(function () {
      async function getMoviesDetails() {
        const response = await fetch(`http://www.omdbapi.com/?apikey=859f87b6&i=${selectedId}`)
        const data = await response.json()
        setMovie(data)

        console.log(data)
      }
      getMoviesDetails()
  }, [selectedId])


  return(
     <div className="details">
       <header>
        <img src={movie.Poster} alt='image of movie'/>
        <div className="details-overview">
          <h2>{movie.Title}</h2>
          <p>{movie.Released} - {movie.Runtime}</p>
          <p>{movie.Genre}</p>
          <p><span>⭐</span>{movie.imdbRating}</p>

        </div>
       </header>

       <section>
        <div className="rating">
           <StarRating  maxRating={5} />
        </div>
         <p><em>{movie.Plot}</em></p>
         <p>Directed by {movie.Director}</p>
         <p>Actors : {movie.Actors}</p>
       </section>

     </div>
  )
}


export default SelectedMovie;
