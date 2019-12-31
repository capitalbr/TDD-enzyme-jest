import { getLetterMatchCount } from "../helpers";
import axios from "axios";

// Using an object defeats the purpose.  If you spell it wrong the test will
// still pass.
// Example 'ActionTypes.Correct_GUES' will still pass.
// export const ActionTypes = {
//   CORRECT_GUESS: "CORRECT_GUESS"
// };

// Using a variable always throws a refrence error and test fails.
export const CORRECT_GUESS = "CORRECT_GUESS";
export const GUESSED_WORD = "GUESSED_WORD";
export const SET_SECRET_WORD = "SET_SECRET_WORD";

const correctGuess = () => (
  { type: CORRECT_GUESS }
);

const guessedWord = (guessedWord, letterMatchCount) => ({
  type: GUESSED_WORD,
  payload: { guessedWord, letterMatchCount}
});

const secretWord = (secretWord) => ({
  type: SET_SECRET_WORD,
  secretWord
});

export const addGuessedWord = (word) => (dispatch, getState) => {
  if (getState().secretWord.toLowerCase() === word.toLowerCase()) {
    dispatch(correctGuess());
  }
  let letterMatchCount = getLetterMatchCount(word, getState().secretWord);
  dispatch(guessedWord(word, letterMatchCount));
};


// always remember that if a function is going to return a promise you must
// return that function so that the outer function doesn't complete before the
// asynchronicity is complete.
export const getSecretWord = () => dispatch => (
  axios.get("http://localhost:3030").then(res => dispatch(secretWord(res.data)))
)