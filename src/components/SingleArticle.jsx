import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticles, upVoteAnArticle } from "../utils/api";

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
  }, [article_id]);

  //vote
  const handleClick = (e) => {
    if (hasVoted) return;
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
          <h2> Title: {singleArticle.title} </h2>
          <h3> Author: {singleArticle.author} </h3>
          <h3> Topic: {singleArticle.topic} </h3>
          <h3>
            Votes: {singleArticle.votes + upVote}
            <button onClick={handleClick}> vote </button>
          </h3>
          <p> {error} </p>
          <h3> Votes: {singleArticle.votes} </h3>
          <h3> comments: {singleArticle.comment_count} </h3>
          <p> created at: {singleArticle.created_at} </p>
        </li>
      </div>
    </main>
  );
}

export default SingleArticle;
