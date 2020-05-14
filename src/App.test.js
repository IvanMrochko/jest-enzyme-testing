import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - componetns props specific to this setup
 * @param {object} state - initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test atrribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without errors ", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
test("render inrement button", () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, "counter-display");
  expect(counter.length).toBe(1);
});
test("render conter display", () => {
  const wrapper = setup();
  const btn = findByTestAttr(wrapper, "counter-btn");
  expect(btn.length).toBe(1);
});
test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");

  expect(initialCounterState).toBe(0);
});
test("click button increment counter display", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  //find button and click
  const btn = findByTestAttr(wrapper, "counter-btn");
  btn.simulate("click");
  wrapper.update();

  //display and test value
  const cunterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(cunterDisplay.text()).toContain(counter + 1);
});
