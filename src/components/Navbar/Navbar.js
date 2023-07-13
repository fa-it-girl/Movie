import Logo from './Logo';
import SearchBar from './SearchBar';
import './Navbar.css';
import Result from './Results'

const Navbar = () => {
 return(
  <div className='navbar'>
   <Logo />
   <SearchBar />
   <Result />
 </div>
)
};

export default Navbar;
