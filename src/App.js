import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Topic from "./components/Topics";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import Vote from "./components/Vote";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> nc-news </h1>
      </header>
      <Nav />
      <form className="search-box">
        {/* <label> search </label> */}
        <input placeholder="Topics" type="text" />
        <button> search </button>
        {/* <label> sortby </label> */}
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
        <Route path="/articles/:article_id/vote" element={<Vote />}></Route>
      </Routes>
    </div>
  );
}
export default App;
