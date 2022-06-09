import React, { useState } from "react";
import { postCommentToExistingArticle } from "../utils/api";
import { useParams } from "react-router-dom";

function PostComment({ setAllComments }) {
  const { article_id } = useParams();
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [SubmittedMsg, setSubmittedMsg] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    postCommentToExistingArticle(article_id, username, comment)
      .then((response) => {
        console.log(response, "<< response!!");
        setAllComments((currComments) => [response, ...currComments]);
        setComment("");

        setSubmittedMsg(" comment submitted.");
      })
      .catch((err) => {
        console.log(err, " err0r");
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
        <small>{SubmittedMsg}</small>
      </p>
    </form>
  );
}
export default PostComment;
