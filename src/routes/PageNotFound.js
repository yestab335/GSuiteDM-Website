import React from 'react'
import { Link } from 'react-router-dom'

// Styles
const Styles = {
  center: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}

const PageNotFound = () => {
  return (
    <>
      <div style={Styles.center}>
        <h1>Error 404</h1>
        <p>Page Not Found</p>
        <Link to='/' role='button'>Return to the home page</Link>
      </div>
    </>
  )
}

export default PageNotFound
