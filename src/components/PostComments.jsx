import React, { useState } from "react";
import { postCommentToExistingArticle } from "../utils/api";
import { useParams } from "react-router-dom";

function PostComment({ setAllComments }) {
  const { article_id } = useParams();
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [submittedMsg, setSubmittedMsg] = useState("");
  const [invalidUser, setInvalidUser] = useState("");

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
        setInvalidUser("user invalid, please use existing user");
      });
    setInvalidUser("");
    setSubmittedMsg("");
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <p>NOTE: please use username 'jessjelly' to post comments!</p>
      <label> username </label>
      <input
        placeholder="jessjelly"
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
        {invalidUser}
        {submittedMsg}
      </p>
    </form>
  );
}
export default PostComment;
