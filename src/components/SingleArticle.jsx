import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticles } from "../utils/api";

function SingleArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  useEffect(() => {
    getSingleArticles(article_id).then((article) => {
      console.log(article);
      setSingleArticle(article);
    });
  }, []);

  return (
    <main className="main-display">
      <div className="card-box">
        <li className="card">
          <h2> Title: {singleArticle.title} </h2>
          <h3> Author: {singleArticle.author} </h3>
          <h3> Topic: {singleArticle.topic} </h3>
          <h3> Votes: {singleArticle.votes} </h3>
          <h3> comments: {singleArticle.comment_count} </h3>
          <p> created at: {singleArticle.created_at} </p>
        </li>
      </div>
    </main>
  );
}

export default SingleArticle;
