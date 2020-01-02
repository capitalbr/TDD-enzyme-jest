import React, { Component } from "react";
import { connect } from "react-redux";
import Congrats from "./congrats";
import GuessedWords from "./guessedWords";
import Input from "./input";
import { getSecretWord } from "../../actions/actions";

export class UnconnectedJotto extends Component {
  constructor(props){
    super(props);
    this.state = {
      revealSecretWord: [ false, "Show"]
    };
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount(){
    this.props.getSecretWord();
  };

  handleClick(e){
    e.preventDefault();
    if (!this.state.revealSecretWord[0]){
      this.setState({ revealSecretWord: [true, "Hide"]});
    } else {
      this.setState({ revealSecretWord: [false, "Show"]});
    }
  };

  render(){
    
    return(
      <div className="container">
        <h1>Jotto</h1>
        {this.state.revealSecretWord[0]
          ? <div>The secret word is {this.props.secretWord}</div>
          : ""}
        <button
          onClick={this.handleClick}
          >{this.state.revealSecretWord[1]}</button>
        <Congrats success={this.props.success}/>
        <Input/>
        <GuessedWords 
          guessedWords={this.props.guessedWords}
          />
      </div>
    )
  }; 
};

const msp = ( { success, guessedWords, secretWord } ) => ({
  success,
  guessedWords,
  secretWord
})

export default connect(msp, { getSecretWord })(UnconnectedJotto);
