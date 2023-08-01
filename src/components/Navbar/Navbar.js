import Logo from './Logo';
import SearchBar from './SearchBar';
import Result from './Results'

const Navbar = ({movies, query, setQuery}) => {
 return(
  <div className='nav-bar'>
   <Logo />
   <SearchBar query={query} setQuery={setQuery}/>
   <Result movies={movies}/>
 </div>
)
};

export default Navbar;
