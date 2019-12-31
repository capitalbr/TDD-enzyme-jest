import { addGuessedWord, getSecretWord } from "../../actions/actions";
import { storeFactory } from "../../../test/testUtils";
import moxios from "moxios";

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

describe("getSecretWord action dispatcher", () => {
  let store;
  let secretWord = "party";
  beforeEach(() => {
    moxios.install();
    store = storeFactory();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  
  test("add secretWord in axios response to state", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      })
    });
    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
        // could be more thorough and check that the entire state is correct
        // const expectedState = {
        //   secretWord,
        //   success: false,
        //   guessedWords: []
        // }
        // expect(newState).toEqual(expectedState);
      });
   
  });
});
