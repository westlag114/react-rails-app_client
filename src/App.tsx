import React, { useState, useEffect, FC } from "react";
import logo from "./logo.svg";
import "./App.scss";
import axios from "axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";

type Examples = {
  id: number;
  title: string;
}[];

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/recruitments" component={RecruitmentIndexPage} />
    </div>
  </BrowserRouter>
);

const Home = () => {
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

const About = () => {
  const [examples, setExamples] = useState<Examples | undefined>();

  useEffect(() => {
    const getExamples = async () => {
      try {
        const result = await axios.get("http://localhost:3000/api/v1/examples");
        setExamples(result.data);
      } catch (error) {
        throw new Error();
      }
    };

    getExamples();
  }, []);

  return (
    <ul>
      {examples?.map((example) => (
        <li key={example.id}>{example.title}</li>
      ))}
    </ul>
  );
};

export default App;
