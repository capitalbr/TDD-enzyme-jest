// We are testing React!  We use react components and
// ReactDOM.render() is used under the hood by Enzyme
import React from 'react';
// Enzyme builds our virtual DOM tree using ReactDOM.render()
// wrapping it with additional functionality
// shallow:  This is a function that utilizes ReactDOM.render to create a shallow
// copy of the DOM tree, meaning placeholders for child React components.
import Enzyme, { shallow } from 'enzyme';
// Enzyme needs to know what version of React is being used.  The adapter
// contains any code that could potentially be modified with future updates
// It's volatility requires it to exist separate from Enzyme.  The adapter
// will load the code that is valid for your version of React
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

// Alters the imported copy of Enzyme's configure value to include the code from
// the above loaded adapter.  Now enzyme is speaking the correct language for your
// version of React.
Enzyme.configure({ adapter: new EnzymeAdapter() });

// A helper function to more easily add props and state to the component you're
// shallow rendering.
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props}/>);
  if (state) wrapper.setState(state);
  return wrapper;
};

// A semi-useful Dryer version of wrapper.find.  It allows you to not have to
// remember what you called your test attribute.
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// Simple functions that jest will see to build the test results.  The first
// parameter is the name of the test and the second is the callback that simply
// throws an error or does not.  If it does it's a failed, red test with information
// on the error if it does not it's a passed, green test.
// assertions (validations) can be used to throw error (or not) 
// jest has built in assertion library using the .expect() funciton.
test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  // assertions return an object of functions such as toBe
  expect(counterDisplay.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = shallow(<App/>);
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("Counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state().counter;
  expect(initialCounterState).toBe(0);
});

test("Button click increments counter by 1", () => {
  const initialState = { counter: 7 }
  const wrapper = setup({}, initialState);
  const button = wrapper.find("[data-test='increment-button']");
  button.simulate('click');
  expect(wrapper.find("[data-test='counter-display']").text()).toContain("8");
});
