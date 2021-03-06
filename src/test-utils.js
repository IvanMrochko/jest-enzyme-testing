import React from "react";
import { shallow } from "enzyme";
import checkPropsTypes from "check-prop-types";
import rootReducer from './pages/store'
import { createStore, applyMiddleware } from 'redux'
import { middlewares } from './configureStore';


export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}
/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {function or class} Component - React componetn
 * @param {object} props - componetns props specific to this setup
 * @param {object} state - initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (Component, props = {}, state = null, initState = {}) => {
  const store = !!initState && storeFactory(initState);
  const wrapper = shallow(<Component {...props} store={store} />);
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
const checkProps = (component, confirmingProps) => {
  const propError = checkPropsTypes(
    component.propTypes,
    confirmingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};

export { setup, findByTestAttr, checkProps };
