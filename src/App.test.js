import React from "react";
import { shallow } from "enzyme";
import App from "./App";

test("renders without errors ", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test("render inrement button", () => {});
test("render conter display", () => {});
test("counter starts at 0", () => {});
test("click button increment counter display", () => {});
