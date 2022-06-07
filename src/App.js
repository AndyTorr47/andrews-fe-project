import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Topic from "./components/Topics";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> nc-news </h1>
      </header>
      <Nav />
      <form className="search-box">
        <input placeholder="Topics" type="text" />
        <button> search </button>
        <select className="sortby-box">
          <option> date </option>
          <option> votes </option>
          <option> comments </option>
        </select>
      </form>
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/topics/:topic" element={<Topic />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route
          path="/articles/:article_id/comments"
          element={<Comments />}
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
