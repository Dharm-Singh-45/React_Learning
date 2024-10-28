import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum expedita
        reiciendis vel tenetur alias, quo dolores quas unde officia doloribus
        qui ea blanditiis est natus! Quae esse doloremque culpa voluptas est
        eligendi expedita! Magnam harum sint ipsum assumenda distinctio optio!
      </p>
      <Link to='/'>Go to Home Page</Link>
      <li> <Link to='/user/anil'>Anil</Link></li>
      <li> <Link to='/user/peter'>Peter</Link></li>
    </div>
  );
}

export default About;
