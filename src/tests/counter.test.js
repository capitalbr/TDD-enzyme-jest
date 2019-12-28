// We are testing React!  We use react components and
// ReactDOM.render() is used under the hood by Enzyme
import React from 'react';
import { shallow } from "enzyme";
import Counter from '../components/counter';


// A helper function to more easily add props and state to the component you're
// shallow rendering.
const setup = (props={}, state=null) => {
  const wrapper = shallow(<Counter {...props}/>);
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
test('renders without error', () => {
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


test("Counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state().counter;
  expect(initialCounterState).toBe(0);
});

describe("increment", () => {
  test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  test("Button click increments counter by 1", () => {
    const initialState = { counter: 7 }
    const wrapper = setup(null, initialState);
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate('click');
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(initialState.counter + 1);
  });
});

describe("decrement", () => {

  test('Renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });

  test("Button click decrements counter by 1 when state is greater than 0", () => {
    const initialState = { counter: 7 }
    const wrapper = setup(null, initialState);
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(initialState.counter - 1);
  });

  test("Error does not show when component mounts", () => {
    const wrapper = setup();
    const counterError = findByTestAttr(wrapper, "counter-error");
    expect(counterError.text()).toBe("");
  });

  describe("Attempting to decrement below zero", () => {

    let wrapper;
    beforeEach(() => {
      wrapper = setup();
      const button = findByTestAttr(wrapper, "decrement-button");
      button.simulate("click");
    });

    test("Does not decrement counter below zero", () => {
      const counterDisplay = findByTestAttr(wrapper, "counter-display");
      expect(counterDisplay.text()).toContain(0);
    });
  
    test("Shows error when attempt to decrement below zero", () => {
      const counterError = findByTestAttr(wrapper, "counter-error");
      expect(counterError.text()).not.toBe("");
    });
  
    test("Hides error when increment button is clicked", () => {
     const incrementButton = findByTestAttr(wrapper, "increment-button");
     incrementButton.simulate("click");
     const counterError = findByTestAttr(wrapper, "counter-error");
     expect(counterError.text()).toBe("");
    });
  });
});



