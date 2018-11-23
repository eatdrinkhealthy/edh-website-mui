/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PageNotFound from "./components/PageNotFound";

// App component - represents the whole app
export default class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <MenuBar />

          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route component={PageNotFound} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}
