import { useState } from "react";

const Button = () => {
  const[added, setAdded] = useState(false)

  const addedRatingHandler = () => {
    setAdded(!added)
  }
  return(
    <>
    <button onClick={addedRatingHandler}>Add rate</button>
    { added  && <p><em>Your rate added succesfully</em></p>}
    </>

  )
};

export default Button;
