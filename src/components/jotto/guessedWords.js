import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let contents;
  if (!guessedWords.length) {
    contents = (
      <span data-test="guess-instructions">
        Please make a guess.
      </span>
    )
  } else {
    contents = (
      <>
        <h3>Guessed Words</h3>
        <table
          data-test="guessed-words"
          className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Match Count</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((word, idx) => {
              return <tr
                data-test="guessed-word"
                key={idx}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
              </tr>
            })}
          </tbody>
        </table>
      </>
    )
  }

  return(
    <div 
      data-test="component-guessed-words"
      className="guessed-words">
      {contents}
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
