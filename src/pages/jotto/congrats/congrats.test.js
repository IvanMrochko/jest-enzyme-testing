import Congrats from "./index";
import { setup, findByTestAttr, checkProps } from "../../../test-utils";

test("renders without errors", () => {
    const wrapper = setup(Congrats);
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1);
});

test("render no text when `success` prop is false", () => {
    const wrapper = setup(Congrats, { success: false });
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.text()).toBe("");
});

test("render not-empty congrats message when `success` prop is true", () => {
    const wrapper = setup(Congrats, { success: true });
    const component = findByTestAttr(wrapper, "component-message");

    expect(component.text().length).not.toBe(0);
});

test("do not throw warning with expected props", () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
});
