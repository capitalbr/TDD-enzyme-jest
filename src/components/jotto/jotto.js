import React from "react";
import Congrats from "./congrats";
import GuessedWords from "./guessedWords";
import Input from "./input";

const Jotto = () => {
  return(
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true}/>
      <Input/>
      <GuessedWords 
        guessedWords={[{
          guessedWord: "train", 
          letterMatchCount: 5
        }]}
        />
    </div>
  )     
};

export default Jotto;
