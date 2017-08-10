import React, { Component } from 'react';
import { StoreContainer } from './containers';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/App.css'

class App extends Component {

  render() {

    return (
      <Router>
        <StoreContainer />
      </Router>
    );
  }
}

export default App;
