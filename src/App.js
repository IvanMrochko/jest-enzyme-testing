import React, { useState, Component } from "react";
import "./App.css";

class App extends Component {
  // constructor() {
  //   this.state.count = 0;
  //   this.onClickBtn.bind(this);
  // }
  // onClickBtn = () => {
  //   const newValue = this.state.count + 1;
  //   this.setState(newValue);
  // };
  render() {
    return (
      <div className="counter" data-test="component-app">
        <h1 data-test="counter-display">
          Counter value: <span className="counter-value">1</span>
        </h1>
        <button className="counter-btn" data-test="counter-btn">
          press to increase
        </button>
      </div>
    );
  }
}

export default App;
