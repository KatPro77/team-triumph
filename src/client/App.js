import React, { Component } from 'react';
import './app.css';
import Landing from '../client/pages/landing/landing.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../client/components/navbar/navbar.js';
export default class App extends Component {

  
  
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
    );
  }
}
