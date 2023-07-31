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
      <input
       type='text'
       placeholder="Seach movie"
       onChange={userInputHandler}
       value={userInput}
       className="search"/>
    </form>
  )
};

export default SearchBar;
