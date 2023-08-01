import Movie from './Movie';

const MovieList = ({movies, onSelelctMovie}) =>{
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelelctMovie={onSelelctMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
