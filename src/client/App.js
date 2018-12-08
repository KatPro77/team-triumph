import React from 'react';
import './app.css';
import Landing from '../client/pages/landing/landing.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../client/components/navbar/navbar.js';
import PlayFish from './pages/game-playFish/playFish.js';


    const App = () => (
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="fish" component={PlayFish} />
        </Switch>
      </div>
    </Router>
    );
 
export default App;