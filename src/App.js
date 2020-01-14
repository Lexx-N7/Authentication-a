import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MyProvider } from "./context";

export default class App extends Component {
  render() {
    return (
      <MyProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </Router>
      </MyProvider>
    );
  }
}
