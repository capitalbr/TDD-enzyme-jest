import checkPropTypes from "check-prop-types";
import rootReducer from "../src/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const storeFactory = (preloadedState) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
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