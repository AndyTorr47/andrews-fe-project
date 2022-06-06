import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Topic from "./components/Topics";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> nc-news </h1>
      </header>
      <Nav />
      <nav className="nav">
        <ul className="nav-items">
          <li> test </li>
          <li> test </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/topics/:topic" element={<Topic />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}
export default App;
