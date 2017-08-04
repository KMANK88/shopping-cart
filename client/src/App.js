import React, { Component } from 'react';
import {HomeContainer , AboutContainer, StoreContainer} from './containers';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HomeContainer />
        <AboutContainer />
        <StoreContainer />
      </div>
    );
  }
}

export default App;
