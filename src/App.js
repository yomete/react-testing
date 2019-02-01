import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: 0,
    }
  }

  setOn = event => {
    this.setState({status: 1})
  }; 

  setOff = event => {
    this.setState({status: 0})
  }; 

  render() {
    return (
      <div className="App">
        <p className="value">
          {this.state.status}
        </p>

        <button id="offButton" onClick={this.setOff}>Off</button>
        <button id="onButton" onClick={this.setOn}>On</button>
      </div>
    );
  }
}

export default App;
