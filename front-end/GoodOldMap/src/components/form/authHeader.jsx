const AuthHeader = (props) => {
  // attributes: header
  // optional: message
  return(
    <>
      <div className="w-full text-center h-20">
        <h1>{props?.header}</h1>
        <p>{props?.message}</p>
      </div>
    </>
  )
}

export default AuthHeader