import { useEffect, useRef } from "react";
import { useState } from "react";

const SearchBar = ({ query , setQuery}) => {
  // const [query, setQuery ] = useState('');

  const inputEl = useRef(null)
  const userInputHandler = (e) => {
      setQuery(e.target.value)
  }

  useEffect(function(){
    console.log(inputEl.current)
    inputEl.current.focus()
  }, [])



  return(

    <form >
      <input
       type='text'
       placeholder="Seach movie"
       onChange={userInputHandler}
       className="search"
       value={query}
       ref={inputEl}
       />
    </form>
  )
};

export default SearchBar;
