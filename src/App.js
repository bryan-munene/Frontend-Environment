import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home.js';
import LoginPage from './Views/LoginPage.js';
import SignupPage from './Views/SignupPage.js'
import './index.css'
import './login.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
