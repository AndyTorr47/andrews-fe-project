import React, { useState, useEffect } from "react";
import { getArticles } from "../utils/api";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((ArtilesFromApi) => {
      console.log(ArtilesFromApi, " << articles");
      setArticles(ArtilesFromApi);
    });
  }, []);

  return (
    <section className="main-display">
      <h1>Articles</h1>
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
            <h2> {article.title} </h2>
            <h3> Author: {article.author} </h3>
            <h3> Topic: {article.topic} </h3>
            <h3> Votes: {article.votes} </h3>
            <h3> comments: {article.comment_count} </h3>
          </li>
        );
      })}
    </section>
  );
}

export default Articles;
