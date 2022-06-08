import React, { useState } from "react";
import { postCommentToExistingArticle } from "../utils/api";
import { useParams } from "react-router-dom";

function PostComment() {
  const { article_id } = useParams();
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    postCommentToExistingArticle(article_id, username, comment)
      .then((data) => {
        console.log(data, "post commment data");
      })
      .catch((err) => {
        console.log(err, " err");
      });
  };

  console.log("form");
  return (
    <form onSubmit={handleCommentSubmit}>
      <label> username </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      ></input>
      <label> comment </label>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></input>
      <button> post comment </button>
      <p>
        <small>
          {" "}
          {username} {comment}{" "}
        </small>
      </p>
    </form>
  );
}
export default PostComment;
