import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/articles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> nc-news </h1>
      </header>
      <nav className="nav">
        <ul className="nav-items">
          <li> test </li>
          <li> test </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Articles />}></Route>
      </Routes>
    </div>
  );
}
export default App;
