import { useState } from "react";

const SearchBar = ({ query , setQuery}) => {
  // const [query, setQuery ] = useState('');

  const userInputHandler = (e) => {
      setQuery(e.target.value)

  }

  const submitHandler = (e) =>{
    e.preventDefault();
    // setUserInput('')
  }

  return(

    <form onSubmit={submitHandler}>
      <input
       type='text'
       placeholder="Seach movie"
       onChange={userInputHandler}
       className="search"
       value={query}
       />
    </form>
  )
};

export default SearchBar;
