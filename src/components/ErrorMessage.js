const ErrorMessage = ({message}) => {
  return(
    <>
      <h2 className="error">
        <span>{message}</span>
      </h2>
    </>

  )
}

export default ErrorMessage;
