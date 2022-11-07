import React from "react";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="detail flex">
      <div className="title">Click below to explore</div>
        <Link className="flex" to="/signup">SignUp</Link>
        <Link className="flex" to="/login">Login</Link>
    </div>
  );
}

export default Details;
