import { addGuessedWord } from "../../actions/actions";
import { storeFactory } from "../../../test/testUtils";

describe("addGuessedWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";
  let store;
  
  describe("no guessed words", () => {
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState)
    });
    test("Updates state correctly for unsuccessful guess", () => {
      store.dispatch(addGuessedWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{ guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
      };
      expect(newState).toEqual(expectedState);
    });
    test("Updates state correctly for successful guess", () => {
      store.dispatch(addGuessedWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }]
      }
      expect(newState).toEqual(expectedState);
    });
  });
  
  describe("If some guessed words", () => {
    const initialState = { 
      secretWord, 
      guessedWords: [
        { guessedWord: "plain", letterMatchCount: 2},
        { guessedWord: "brain", letterMatchCount: 2},
        { guessedWord: "splat", lettermatchCount: 3}
      ]
    }
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("Updates state correctly for unsuccessful guess", () => {
      store.dispatch(addGuessedWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...initialState.guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3}
        ]
      }
      expect(newState).toEqual(expectedState);
    });
    test("Updates state correctly for successful guess", () => {
      store.dispatch(addGuessedWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,  // more explicit than writing ...initialState
        success: true,
        guessedWords: [
          ...initialState.guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      } 
      expect(newState).toEqual(expectedState);
    });
  });
});
