import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import Input from "../../components/jotto/input";

const setup = (preloadedState={}) => {
  const store = storeFactory(preloadedState);
  return shallow(<Input store={store}/>).dive().dive();
};

describe("render", () => {
  describe("When word has not been guessed", () => {
    test("renders without error", () => {

    });

    test("renders the input box", () => {

    });

    test("renders the submit button", () => {

    });
  });
  
  describe("When word has been guessed", () => {
    test("renders without error", () => {

    });

    test("does not render the input box", () => {

    });

    test("does not render the submit button", () => {

    });
  });
});

describe("update the state", () => {

});

test("Has access to succes part of state in props", () => {

});

test("Has correctGuess action creator as prop", () => {

});

test("Has addGuess action creator as prop", () => {

});


