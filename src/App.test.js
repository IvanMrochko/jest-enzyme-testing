import React from "react";
import { shallow } from "enzyme";
import App from "./App";

test("render test ", () => {
  let component = shallow(<App />);
  console.log(component.debug());
});
