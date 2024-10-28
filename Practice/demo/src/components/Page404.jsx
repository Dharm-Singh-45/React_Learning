import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
      <h1>404 Page</h1>
      <p>this url is not available</p>
      <Link to='/'> Go to home Page</Link>
    </div>
  )
}

export default Page404
