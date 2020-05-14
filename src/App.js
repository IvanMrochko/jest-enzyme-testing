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
        {/* <div>
          Counter value:{" "}
          <span className="counter-value">{this.state.count}</span>
        </div>
        <button className="counter-btn" onClick={this.onClickBtn}>
          press to increase
        </button> */}
      </div>
    );
  }
}

export default App;
