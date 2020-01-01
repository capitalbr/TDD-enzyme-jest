import React from "react";
import { storeFactory } from "../../../test/testUtils";
import { shallow } from "enzyme";
import Jotto from "../../components/jotto/jotto";

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  return shallow(<Jotto store={store}/>).dive().dive();
};

describe("Redux props", () => {
  test("Receives 'success' piece of state as prop", () => {
    // even though there is a default 'success' state in the reducer we want
    // to pass an initial state in case the default changes in the future so
    // we can be sure of what we are asserting
    const success = true;
    const wrapper = setup({ success });
    let successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("Receives 'guessedWords' piece of state as prop", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup( { guessedWords } );
    let guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test("Receives 'secretWord' piece of state as prop", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test("Receives 'getSecretWord' piece of state as function prop", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});