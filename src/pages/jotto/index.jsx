import React, { Component } from "react";
import Congrats from './congrats';
import GuessedWord from "./guessed-words";
import Input from "./input"
class Jotto extends Component {
  render() {
    return <div className="container">
      <h1>Jotto</h1>
      <Input />
      <Congrats success={true} />
      <GuessedWord guessedWords={[{
        guessedWord: 'train', letterMatchCount: 3
      }]} />
    </div>;
  }
}

export default Jotto;
