import React from "react";
import Congrats from "./congrats";
import GuessedWords from "./guessedWords";

const Jotto = () => {
  return(
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true}/>
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
