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
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("renders the input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    test("renders the submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  
  describe("When word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });

    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("does not render the input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });

    test("does not render the submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
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


