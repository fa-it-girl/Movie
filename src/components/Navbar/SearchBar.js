import { useState } from "react";

const SearchBar = () => {
  const [userInput, setUserInput ] = useState('');

  const userInputHandler = (e) => {
      setUserInput(e.target.value)
      console.log(e.target.value)
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    setUserInput('')
  }

  return(

    <form onSubmit={submitHandler}>
      <input type='search' placeholder="Seach movie" onChange={userInputHandler}/>
    </form>
  )
};

export default SearchBar;
