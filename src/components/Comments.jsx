import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { displayCommentsOfSelectedArticle } from "../utils/api";

function Comments() {
  const { article_id } = useParams();
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    displayCommentsOfSelectedArticle(article_id)
      .then((comments) => {
        setAllComments(comments);
      })
      .catch((err) => {
        console.log(err, " err");
      });
  }, [article_id]);

  return (
    <section>
      <ul className="comments-box">
        {allComments?.allComments?.map((comment) => {
          return (
            <li className="comments" key={comment.comment_id}>
              {comment.body};
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
