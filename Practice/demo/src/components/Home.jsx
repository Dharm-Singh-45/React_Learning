import React from "react";
import { Link,useLocation } from "react-router-dom";

function Home() {
    const location = useLocation()
    console.log(location)
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis,
        amet nesciunt commodi consectetur at aspernatur nemo explicabo, maxime
        accusamus ab corrupti odit reprehenderit officia doloribus quae facere
        voluptates! Consequuntur, voluptatibus.
      </p>
      <Link to='/about'>Go to about Page</Link>
    </div>
  );
}

export default Home;
