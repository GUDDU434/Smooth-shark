import React from 'react'
import { useParams } from 'react-router-dom'
const InvalidPage = () => {
    const {name} = useParams() 
  return (
    <div className="pageNotFound">
      <h1>Oops..! 404 Page Not Found</h1>
      <p>Looks like you came to wrong page on our server</p>
      <img
        src="https://raw.githubusercontent.com/oshyam/404-with-react-router-dom/master/src/pagenotfound.jpg"
        height="500"
        width="500"
        alt="not found"
      />
    </div>
  );
}

export default InvalidPage