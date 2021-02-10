import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.scss";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/recruitments" component={RecruitmentIndexPage} />
    </div>
  </BrowserRouter>
);

const Home: FC = () => {
  const userName = "simula-labs";

  const getProfile = async () => {
    try {
      const result = await axios.get(
        `${"https://api.github.com/users"}/${userName}`
      );
      console.log(result.data);
    } catch (error) {
      throw new Error();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getProfile}>get Profile!</button>
      </header>
    </div>
  );
};

export default App;
