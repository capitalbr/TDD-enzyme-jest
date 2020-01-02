import React from "react";
import TotalGuesses from "../../components/jotto/totalGuesses";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";


describe("with no words guessed", () => {
  let wrapper;
  let totalGuesses;
  let totalGuessCount;
  beforeEach(() => {
    totalGuessCount = 0;
    wrapper = shallow(<TotalGuesses totalGuesses={totalGuessCount}/>);
    totalGuesses = findByTestAttr(wrapper, 'component-total-guesses');
  });

  test("renders without error", () => {
    expect(totalGuesses.length).toBe(1);
  });
  
  test("displays 0 as the amount of words guessed", () => {
    expect(totalGuesses.text()).toContain(0);
  });
});

describe("with words guessed", () => {
  let wrapper;
  let totalGuesses;
  let totalGuessCount;
  beforeEach(() => {
    totalGuessCount = Math.floor(Math.random() * 10 + 1);
    wrapper = shallow(<TotalGuesses totalGuesses={totalGuessCount}/>);
    totalGuesses = findByTestAttr(wrapper, 'component-total-guesses');
  });
  
  test("renders without error", () => {
    expect(totalGuesses.length).toBe(1);
  });

  test("displays correct number of total words guessed", () => {
    expect(totalGuesses.text()).toContain(totalGuessCount);
  });
});