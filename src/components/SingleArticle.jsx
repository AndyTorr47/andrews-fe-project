import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticles, upVoteAnArticle } from "../utils/api";
import Comments from "./Comments";
import DisplayComments from "./DisplayComments";
import PostComment from "./PostComments";
import DisplayCommentsForm from "./DisplayCommentsForm";
import ArticlesDoesNotExist from "./ArticleDoesNotExist";

function SingleArticle() {
  const [allComments, setAllComments] = useState([]);
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});

  const [upVote, setUpVote] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState("");
  const [found, setFound] = useState(false);

  useEffect(() => {
    getSingleArticles(article_id)
      .then((article) => {
        console.log(article);
        setSingleArticle(article);
        setFound(true);
      })
      .catch((err) => {
        console.log("no article found");
      });
  }, []);

  //vote
  const handleVote = (e) => {
    if (!hasVoted) return;
    else {
      e.preventDefault();
      setUpVote((currVotes) => currVotes + 1);

      upVoteAnArticle(article_id)
        .then(() => {
          setHasVoted(true);
        })
        .catch(() => {
          setUpVote((currVotes) => currVotes - 1);
          setError("vote failed, please try again");
        });
    }
  };

  return (
    <main className="main-display">
      {!found ? (
        <ArticlesDoesNotExist />
      ) : (
        <div className="card-box">
          <li className="card">
            <h2> Title: {singleArticle?.article?.title} </h2>
            <p> created at: {singleArticle?.article?.created_at} </p>
            <h3> Author: {singleArticle?.article?.author} </h3>
            <h3> Topic: {singleArticle?.article?.topic} </h3>
            <h3>
              Votes: {singleArticle?.article?.votes + upVote}
              <button onClick={handleVote}> vote </button>
            </h3>
            <p> {error} </p>
            <h3> comments: {singleArticle?.article?.comment_count} </h3>

            <div className="comment-buttons">
              <>
                <DisplayCommentsForm>
                  <PostComment setAllComments={setAllComments} />
                </DisplayCommentsForm>
              </>
              <section>
                <DisplayComments>
                  <Comments
                    setAllComments={setAllComments}
                    allComments={allComments}
                  />
                </DisplayComments>
              </section>
            </div>
          </li>
        </div>
      )}
    </main>
  );
}

export default SingleArticle;
