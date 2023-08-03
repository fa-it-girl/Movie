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

      if (data.Response === 'False' || !data.Search || data.Search.length === 0) {throw new Error('Movie not found')}

      setMovies(data.Search)
      setIsLoading(false)}
      catch(error){
        setError(error.message)
        setIsLoading(false);
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
          { selectedId ? <SelectedMovie  selectedId={selectedId}/> : null
          }
        </Box>
      </Main>

    </div>
  );
}

export default App;
