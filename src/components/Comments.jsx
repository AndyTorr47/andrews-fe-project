import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { displayCommentsOfSelectedArticle } from "../utils/api";
import DeleteComment from "./DeleteComments";

function Comments({ setAllComments, allComments }) {
  const { article_id } = useParams();

  useEffect(() => {
    displayCommentsOfSelectedArticle(article_id)
      .then((comments) => {
        console.log(comments);
        setAllComments(comments);
      })
      .catch((err) => {
        console.log(err, " err");
      });
  }, []);

  console.log(allComments);

  return (
    <section>
      <ul className="comments-box">
        {allComments.length === 0 ? (
          <p> no comments on this article </p>
        ) : (
          allComments?.comments?.map((comment) => {
            console.log(comment);
            return (
              <li className="comments" key={comment.comment_id}>
                {comment.body}
                {comment.author === "KingUser" ? (
                  <DeleteComment
                    allComments={allComments}
                    setAllComments={setAllComments}
                    comment_id={comment.comment_id}
                  />
                ) : null}
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
}

export default Comments;
