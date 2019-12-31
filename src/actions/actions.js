import { getLetterMatchCount } from "../helpers";

// Using an object defeats the purpose.  If you spell it wrong the test will
// still pass.
// Example 'ActionTypes.Correct_GUES' will still pass.
// export const ActionTypes = {
//   CORRECT_GUESS: "CORRECT_GUESS"
// };

// Using a variable always throws a refrence error and test fails.
export const CORRECT_GUESS = "CORRECT_GUESS";
export const GUESSED_WORD = "GUESSED_WORD";

const correctGuess = () => (
  { type: CORRECT_GUESS }
);

const guessedWord = (guessedWord, letterMatchCount) => ({
  type: GUESSED_WORD,
  value: { guessedWord, letterMatchCount}
});

export const addGuessedWord = (word) => (dispatch, getState) => {
  if (getState().secretWord.toLowerCase() === word.toLowerCase()) {
    dispatch(correctGuess());
  }
  let letterMatchCount = getLetterMatchCount(word, getState().secretWord);
  dispatch(guessedWord(word, letterMatchCount));
};