import React, { useState, Component } from "react";
import "./App.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div className="counter" data-test="component-app">
        <h1 data-test="counter-display">Counter value: {this.state.counter}</h1>
        <button
          className="counter-btn"
          data-test="counter-btn"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          press to increase
        </button>
      </div>
    );
  }
}

export default Counter;
