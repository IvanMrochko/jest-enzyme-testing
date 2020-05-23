import React from "react";
import { shallow } from "enzyme";
import Congrats from ".";
import { setup, findByTestAttr } from "../../../test-utils";

test("renders without errors", () => {
    const wrapper = setup(<Congrats />);
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1);
});

test("render no text when `success` prop is false", () => {
    const wrapper = setup(<Congrats />, { success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');

});

test("render not-empty congrats message when `success` prop is true", () => {
    const wrapper = setup(<Congrats />, { success: true });
    const component = findByTestAttr(wrapper, 'component-message');
    expect(component.text().length).not.toBe(0);
});
