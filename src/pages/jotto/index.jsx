import React, { Component } from "react";
import Congrats from './congrats';
import GuessedWord from "./guessed-words";
import Input from "./input"
import { connect } from "react-redux";
import { getSecretWord } from "../store/jottoActions";

export class UnconnectedApp extends Component {

  componentDidMount() {
    //get the secret word from the server
    this.props.getSecretWord();
  }
  render() {
    return <div className="container">
      <h1>Jotto</h1>
      <div>The secret word is: {this.props.secretWord}</div>
      <Congrats success={this.props.success} />
      <Input />
      <GuessedWord guessedWords={this.props.guessedWords} />
    </div>;
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { success, guessedWords, secretWord }
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
