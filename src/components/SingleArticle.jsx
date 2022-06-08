import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticles, upVoteAnArticle } from "../utils/api";
import Comments from "./Comments";
import DisplayComments from "./DisplayComments";
import PostComment from "./PostComments";

function SingleArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});

  const [upVote, setUpVote] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getSingleArticles(article_id).then((article) => {
      console.log(article);
      setSingleArticle(article);
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
      <div className="card-box">
        <li className="card">
          <h2> Title: {singleArticle?.article?.title} </h2>
          <h3> Author: {singleArticle?.article?.author} </h3>
          <h3> Topic: {singleArticle?.article?.topic} </h3>
          <h3>
            Votes: {singleArticle?.article?.votes + upVote}
            <button onClick={handleVote}> vote </button>
          </h3>
          <p> {error} </p>
          <h3> Votes: {singleArticle?.article?.votes} </h3>
          <h3> comments: {singleArticle?.article?.comment_count} </h3>
          <section>
            <div className="comment-buttons">
              <>
                <DisplayCommentForm>
                  <PostComment />
                </DisplayCommentForm>
              </>
              <section>
                <DisplayComments>
                  <Comments />
                </DisplayComments>
              </section>
            </div>
          </section>
          <p> created at: {singleArticle?.article?.created_at} </p>
        </li>
      </div>
    </main>
  );
}

//comments

function DisplayCommentForm({ children }) {
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm((currState) => !currState);
  };

  return (
    <div>
      {form ? children : null}
      <button onClick={toggleForm}> add comment </button>
    </div>
  );
}

export default SingleArticle;
