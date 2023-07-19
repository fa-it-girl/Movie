import WachedMovie from './WachedMovie'

const WachedMoviesList = ({wachedMovies}) => {
  return(
  <>
    <ul className="list">
      {wachedMovies.map((movie) => (
        <WachedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  </>
  )
};
export default WachedMoviesList;
