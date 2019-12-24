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

const setup = (props={}, state) => {
  return shallow(<App {...props}/>);
};

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

test('renders click counter', () => {
  const wrapper = setup();
  const clickCounter = findByTestAttr(wrapper, "click-counter");
  expect(clickCounter.length).toBe(1);
});


