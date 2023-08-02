import Navbar from './components/Navbar/Navbar';
import MovieList from './components/movies/MovieList';
import { useEffect, useState } from 'react';
import Main from './components/movies/Main';
import WachedMovies from './components/movies/WachedMoviesList';
import Box from './components/movies/Box';
import './App.css'
import StarRating from './components/StarRating';
import ErrorMessage from './components/ErrorMessage'
import SelectedMovie from './components/movies/SelectedMovie';

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [query, setQuery ] = useState('');
  const [selectedId, setSelectedId] = useState(null)

  const handleSelectMovie =(id) => {
    setSelectedId(id)
  }
  useEffect(function(){
    async function FetchMovies(){
      try {
        setIsLoading(true)
        setError('')
      const res = await fetch(`http://www.omdbapi.com/?apikey=859f87b6&s=${query}`)

      if ( !res.ok) throw new Error('Something went wrong');

      const data = await res.json()

      if (data.Response === 'False') throw new Error('Movie not found')

      setMovies(data.Search)
      setIsLoading(false)}
      catch(error){
        setError(error.message)
      }
    }
    FetchMovies()
  }, [query])


  return (
    <div className="App">
      <Navbar movies={movies} query={query} setQuery={setQuery}/>

      < Main>
        <Box>
          {isLoading && <h1 style= {{textAlign: 'center', marginTop: '10%'}}>Loading...</h1>}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelelctMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>


        <Box>
          { selectedId ? <SelectedMovie  selectedId={selectedId}/> :
              <>
                  {/* <WachedMovies wachedMovies = {tempWatchedData}/> */}
              </>
          }
        </Box>
      </Main>

    </div>
  );
}

export default App;
