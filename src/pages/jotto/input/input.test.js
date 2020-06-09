import React from 'react';
import { setup, findByTestAttr } from "../../../test-utils";
import Input, { UnconnectedInput } from './index';
import { guessWord } from '../../store/jottoActions';
import { shallow } from 'enzyme';


describe('render ', () => {
    describe('word has not been guessed', () => {
        let componentWrapper;

        beforeEach(() => {
            const initialState = { success: false };
            const wrapper = setup(Input, null, null, initialState);
            componentWrapper = wrapper.dive().dive();
        })
        test('renders component without error', () => {
            const component = findByTestAttr(componentWrapper, 'component-input')
            expect(component.length).toBe(1);
        })

        test('renders input box', () => {
            const inputBox = findByTestAttr(componentWrapper, 'input-box')
            expect(inputBox.length).toBe(1);
        })

        test('renders submit button ', () => {
            const submitButton = findByTestAttr(componentWrapper, 'submit-button')
            expect(submitButton.length).toBe(1);
        })

    })
    describe('word has been guessed', () => {
        let componentWrapper;
        beforeEach(() => {
            const initialState = { success: true };
            const wrapper = setup(Input, null, null, initialState);
            componentWrapper = wrapper.dive().dive();
        })
        test('renders component without error', () => {
            const component = findByTestAttr(componentWrapper, 'component-input')
            expect(component.length).toBe(1);
        })

        test('does not render input box', () => {
            const inputBox = findByTestAttr(componentWrapper, 'input-box')
            expect(inputBox.length).toBe(0);
        })

        test('does not render submit button ', () => {
            const submitBtn = findByTestAttr(componentWrapper, 'submit-button')
            expect(submitBtn.length).toBe(0);
        })
    })
})
describe('redux props ', () => {
    test('has success piece of state as prop ', () => {
        const success = true;
        const wrapper = setup(Input, null, null, { success });
        const componentWrapper = wrapper.dive().dive();
        const successProp = componentWrapper.instance().props.success;
        expect(successProp).toBe(success)
    })
    test('`guessWord` action creator iis a function prop', () => {
        const wrapper = setup(Input);
        const componentWrapper = wrapper.dive().dive();
        const guessWordProp = componentWrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })
})

describe('`guessedWord action creator  call` ', () => {
    let guessedWordMock;
    let wrapper;
    const guessedWord = 'train';
    beforeEach(() => {
        guessedWordMock = jest.fn();
        const props = {
            guessWord: guessedWordMock
        }

        wrapper = shallow(<UnconnectedInput {...props} />);
        //add value to input box
        wrapper.setState({ currentGuess: guessedWord })

        const button = findByTestAttr(wrapper, 'submit-button');
        button.simulate('click', { preventDefault() { } });

    })
    test('simulate onclick on submit', () => {
        const guessedWordMockCallCount = guessedWordMock.mock.calls.length;
        expect(guessedWordMockCallCount).toBe(1);
    });

    test('calls  guessedWord with input value as argument', () => {
        const guessedWordArg = guessedWordMock.mock.calls[0][0];
        console.log(guessedWordMock.mock.calls);
        expect(guessedWordArg).toBe(guessedWord);
    })
    test('input box clear on submit', () => {

        expect(wrapper.state('currentGuess')).toBe('')
    })

})

