const Description = ({description}) => {
  return(
  <>

  {description.map((movie)=> {
    return(<ul>
      <h1>{movie.Poster}</h1>
    <h1>{movie.Title}</h1>
    </ul>)

  })}
  </>
  )
};
export default Description;
