import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let visibility = "";
  if (guessedWords.length) visibility = "hidden";
  return(
    <div data-test="component-guessed-words">
      <span data-test="guess-instructions"
        className={visibility}> 
        Please make a guess. 
      </span>
    </div>
  )
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;

