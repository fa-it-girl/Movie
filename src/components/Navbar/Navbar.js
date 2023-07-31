import Logo from './Logo';
import SearchBar from './SearchBar';
import Result from './Results'

const Navbar = ({movies}) => {
 return(
  <div className='nav-bar'>
   <Logo />
   <SearchBar />
   <Result movies={movies}/>
 </div>
)
};

export default Navbar;
