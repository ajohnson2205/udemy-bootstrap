import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CodeRender from './components/CodeRender.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CodeRender />
      </div>
    );
  }
}

export default App;
