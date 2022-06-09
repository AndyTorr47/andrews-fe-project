import React, { useEffect } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import SortBy from "./SortBy";

function Articles({ articles, setArticles }) {
  useEffect(() => {
    getArticles().then((ArtilesFromApi) => {
      console.log(ArtilesFromApi, " << articles");
      setArticles(ArtilesFromApi);
    });
  }, []);

  return (
    <section className="main-display">
      <h1>Articles</h1>
      {articles?.articles?.map((article) => {
        return (
          (<SortBy />),
          (
            <div className="card-box" key={article.article_id}>
              <li className="card">
                <h2>
                  <Link to={`articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                </h2>
                <h3> Author: {article.author} </h3>
                <h3>
                  Topic:
                  <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
                </h3>
                <h3> Votes: {article.votes} </h3>
                <h3> comments: {article.comment_count} </h3>
                <p> created at: {article.created_at} </p>
              </li>
            </div>
          )
        );
      })}
    </section>
  );
}

export default Articles;
