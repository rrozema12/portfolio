import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter as BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <MainBody />
      <AboutMe />
      <Project />
    </Fragment>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    <Route path="/" exact component={Home} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
