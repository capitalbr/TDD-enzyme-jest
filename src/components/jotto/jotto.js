import React from "react";
import Congrats from "./congrats";
import GuessedWords from "./guessedWords";

export default class Jotto extends React.Component{

  render(){
    return(
      <div>
        <Congrats />
        <GuessedWords guessedWords={[{guessedWord: "hey", letterMatchCount: 3}]}/>
      </div>
    )
  }
};

