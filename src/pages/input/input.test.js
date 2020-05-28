import React from 'react';
import { setup, findByTestAttr, storeFactory } from "../../test-utils";
import Input from '.';

const wrapper = setup(Input, null, null, {});


describe('render ', () => {
    console.log((wrapper.dive().dive()).debug());
    describe('word has not been guessed', () => {
        test('renders component without error', () => {

        })

        test('render input box', () => {

        })

        test('render submit button ', () => {

        })

    })
    describe('word ha been guessed', () => {
        test('renders component without error', () => {

        })

        test('does not render input box', () => {

        })

        test('does not render submit button ', () => {

        })
    })
})
describe('update state ', () => {

})

