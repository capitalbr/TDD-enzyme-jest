import { CORRECT_GUESS, correctGuess } from "../../actions/guessedWordsActions";

describe("CORRECT_GUESS", () => {
  test("It returns an object with type 'CORRECT_GUESS'", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: CORRECT_GUESS });
  });
})
