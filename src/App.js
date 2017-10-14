import React, { Component } from 'react';
import './App.css';
import HomeContainer from './containers/homeContainer'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <HomeContainer/>
      </div>
    );
  }
}

export default App;
