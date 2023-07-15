import { useState } from 'react';
import './Movie.css';


const Movie =( {movie}) => {

  // const[openDescription, setOpenDescription] = useState(false)

  // const descriptionHandler = () => {
  //       setOpenDescription(!openDescription)
  // }
  return(
    <>
    <div className="movie">
      <div>
        <img src={movie.Poster} alt={movie.Title}/>
      </div>
      <div>
        <h3>{movie.Title}</h3>
        <h3>{movie.Year}</h3>
      </div>
    </div>

    </>


  );
};

export default Movie;
