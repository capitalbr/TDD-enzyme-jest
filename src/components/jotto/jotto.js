import React, { Component } from "react";
import { connect } from "react-redux";
import Congrats from "./congrats";
import GuessedWords from "./guessedWords";
import Input from "./input";
import { getSecretWord } from "../../actions/actions";

export class UnconnectedJotto extends Component {

  componentDidMount(){
    this.props.getSecretWord();
  }

  render(){
    
    return(
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success}/>
        <Input/>
        <GuessedWords 
          guessedWords={this.props.guessedWords}
          />
      </div>
    )
  } 
};

const msp = ( { success, guessedWords, secretWord } ) => ({
  success,
  guessedWords,
  secretWord
})

export default connect(msp, { getSecretWord })(UnconnectedJotto);
