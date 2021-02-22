import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignUpPage from "./scenes/signUp";

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={RecruitmentIndexPage} />
      <Route path="/sign_up" component={SignUpPage} />
    </div>
  </BrowserRouter>
);

export default App;
