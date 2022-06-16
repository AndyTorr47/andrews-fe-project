import React, { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";

function Topic() {
  const { topic } = useParams();
  console.log(topic, " << ");
  const [anyTopic, setAnyTopic] = useState([]); //use effect
  useEffect(() => {
    getArticles().then((articles) => {
      const specificTopicArticles = articles?.articles?.filter((article) => {
        if (article.topic === topic) {
          return article;
        }
      });
      setAnyTopic(specificTopicArticles);
    });
  }, []);

  return (
    <main className="main-display">
      {anyTopic.map((topic) => {
        console.log(topic);
        return (
          <div className="card-box">
            <li className="card">
              <h2 className="topic"> Topic: {topic.topic} </h2>
              <h3> Title: {topic.title} </h3>
              <h3> Author: {topic.author}</h3>
              <h3> vote: {topic.votes}</h3>
              <h3> comments: {topic.comment_count} </h3>
              <p> created at: {topic.created_at}</p>
            </li>
          </div>
        );
      })}
    </main>
  );
}

export default Topic;
