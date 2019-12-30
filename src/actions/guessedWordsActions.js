// Using an object defeats the purpose.  If you spell it wrong the test will
// still pass.
// Example 'ActionTypes.Correct_GUES' will still pass.
// export const ActionTypes = {
//   CORRECT_GUESS: "CORRECT_GUESS"
// };

// Using a variable always throws a refrence error and test fails.
export const CORRECT_GUESS = "CORRECT_GUESS";

export const correctGuess = () => (
  { type: CORRECT_GUESS }
);