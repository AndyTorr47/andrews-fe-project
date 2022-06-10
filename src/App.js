import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Topic from "./components/Topics";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";
import { useState } from "react";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [articles, setArticles] = useState([]);
  const [allComments, setAllComments] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Andrew's Articles! </h1>
      </header>

      <Routes>
        <Route
          path="/"
          element={<Articles articles={articles} setArticles={setArticles} />}
        ></Route>
        <Route path="/topics/:topic" element={<Topic />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route
          path="/articles/:article_id/comments"
          element={
            <Comments
              allComments={allComments}
              setAllComments={setAllComments}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
