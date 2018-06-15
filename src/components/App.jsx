import React, { Component } from 'react';
import Todoform from './Todoform/Todoform'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Todoform />
        </p>
      </div>
    );
  }
}

export default App;
