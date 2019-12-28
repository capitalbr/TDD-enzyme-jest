import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../test/testUtils";
import GuessedWords from "../../components/jotto/guessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "lucky", letterMatchCount: 3 }]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props};
  return shallow(<GuessedWords {  ...setupProps}/>);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const guessedWords = findByTestAttr(wrapper, "component-guessed-words");
    expect(guessedWords.length).toBe(1);
  });

  test("renders instructions if there are no words guessed", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    const hasHiddenClass = instructions.hasClass("hidden");
    expect(hasHiddenClass).toBe(false);
  });
});

describe("if there are words guessed", () => {

});