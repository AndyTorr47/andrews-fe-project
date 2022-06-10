import React, { useState } from "react";
import { deleteCommentFromArticle } from "../utils/api";

function DeleteComment({ setAllComments, comment_id }) {
  const [deletedMsg, setDeletedMsg] = useState("");
  const [deleteErr, setDeleteErr] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();

    deleteCommentFromArticle(comment_id)
      .then(() => {
        setDeletedMsg("comment deleted.");

        setAllComments((currComments) => {
          return currComments.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
        });
      })
      .catch(() => {
        setDeleteErr(" something went wrong, please try again.");
      });
  };

  return (
    <div>
      <button onClick={handleDelete}>delete</button>
      <p>
        {deletedMsg}
        {deleteErr}
      </p>
    </div>
  );
}

export default DeleteComment;
