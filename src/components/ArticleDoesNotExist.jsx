import React from "react";
import { Link } from "react-router-dom";

function ArticlesDoesNotExist() {
  return (
    <div>
      <h1> 404 Error </h1>
      <h1> No article Found </h1>
      <h2>
        <Link to={"/"}> {"HOME PAGE"} </Link>
      </h2>
    </div>
  );
}

export default ArticlesDoesNotExist;
