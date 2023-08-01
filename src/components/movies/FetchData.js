const FetchData = () => {

  fetch('http://www.omdbapi.com/?i=tt3896198&apikey=859f87b6&s=interstellar')
    .then((response) => response.json())
    .then((data) => console.log(data))
  return(
    {

    }
  )
}

export default FetchData;
