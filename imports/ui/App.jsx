/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import PageNotFound from "./components/PageNotFound";

// App component - represents the whole app
export default class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Content} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
