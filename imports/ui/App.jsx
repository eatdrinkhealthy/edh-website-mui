/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";

// App component - represents the whole app
export default class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={Content} />
        </div>
      </Router>
    );
  }
}
