import Movie from './Movie';
// import Button from './Button'
// import { useState } from 'react';

const MovieList = ({movies}) =>{


  return(
    <>

    <ul>
      {movies.map((movie)=> (
        <Movie movie={movie}
               key={movie.imdbID}
        />
         ))}
    </ul>
    </>
  )
};

export default MovieList;
