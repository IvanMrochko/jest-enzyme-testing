import React from "react";

import Counter from "./Counter";
import { setup, findByTestAttr } from "../../test-utils";

test("renders without errors ", () => {
  const wrapper = setup(Counter);
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
test("render inrement button", () => {
  const wrapper = setup(Counter);
  const counter = findByTestAttr(wrapper, "counter-display");
  expect(counter.length).toBe(1);
});
test("render conter display", () => {
  const wrapper = setup(Counter);
  const btn = findByTestAttr(wrapper, "counter-btn");
  expect(btn.length).toBe(1);
});
test("counter starts at 0", () => {
  const wrapper = setup(Counter);
  const initialCounterState = wrapper.state("counter");

  expect(initialCounterState).toBe(0);
});
test("click button increment counter display", () => {
  const counter = 7;
  const wrapper = setup(Counter, null, { counter });

  //find button and click
  const btn = findByTestAttr(wrapper, "counter-btn");
  btn.simulate("click");
  wrapper.update();

  //display and test value
  const cunterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(cunterDisplay.text()).toContain(counter + 1);
});
