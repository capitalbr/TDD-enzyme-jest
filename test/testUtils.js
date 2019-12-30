import checkPropTypes from "check-prop-types";
import rootReducer from "../src/reducers/rootReducer";
import { createStore } from "redux";

export const storeFactory = (preloadedState) => (
  createStore(rootReducer, preloadedState)
);

export const findByTestAttr = (wrapper, attribute) => (
  wrapper.find(`[data-test='${attribute}']`)
);

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes, 
    expectedProps, 
    "prop", 
    component.name
  );
  expect(propError).toBeUndefined();
};