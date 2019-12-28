import React from "react";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../../test/testUtils";
import Congrats from "../components/jotto/congrats";
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  return Enzyme.shallow(<Congrats {...props}/>);
}

test("renders without error", () => {
  const wrapper = setup();
  const congrats = findByTestAttr(wrapper, "component-congrats");
  expect(congrats.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const congrats = findByTestAttr(wrapper, "component-congrats");
  expect(congrats.text()).toBe("");
});

test("renders non empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const congrats = findByTestAttr(wrapper, "congrats-message");
  expect(congrats.text().length).not.toBe(0);
});