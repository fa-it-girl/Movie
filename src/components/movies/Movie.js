import { useState } from 'react';
import './Movie.css';
import Description from './Description';


const Movie =( {movie}) => {

  const[openDescription, setOpenDescription] = useState(false)

  const descriptionHandler = () => {
        setOpenDescription(!openDescription)
  }
  return(
    <>
    <div className="movie" onClick={descriptionHandler}>
      <div>
        <img src={movie.Poster} alt={movie.Title}/>
      </div>
      <div>
        <h3>{movie.Title}</h3>
        <h3>{movie.Year}</h3>
      </div>
    </div>
     {openDescription && <Description />}
    </>


  );
};

export default Movie;
