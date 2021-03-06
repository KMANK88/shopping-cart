import React, { Component } from 'react';
import {HomeContainer , AboutContainer, StoreContainer} from './containers';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {NavBar} from "./components";

import 'css/App.css';

class App extends Component {


  render() {
    return (
  <div>
      <Router>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Route exact path="/" component={ HomeContainer } />
          <Route path="/my-about-page" component={ AboutContainer } />
          <Route path="/my-shop-page" component={ StoreContainer } />
        </div>
      </div>
      </Router>

    </div>
    );
  }
}

export default App;
