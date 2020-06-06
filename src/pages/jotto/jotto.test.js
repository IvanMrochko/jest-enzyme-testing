import React from 'react';
import { setup, storeFactory } from "../../test-utils";
import Jotto, { UnconnectedApp } from './index';
import { guessWord, getSecretWord } from '../store/jottoActions';
import { shallow } from 'enzyme';

const setupApp = (state = {}) => {
    const wrapper = setup(Jotto, null, null, state).dive().dive();
    return wrapper;
}


describe('redux props ', () => {
    test('has access to `success` state ', () => {
        const success = true;
        const componet = setupApp({ success });
        const successProp = componet.instance().props.success;
        expect(successProp).toBe(success)
    })
    test('`guesseWords` action creator iis a function prop', () => {
        const guessedWords = [{ guessdWord: 'train', letterMatchCount: 3 }];
        const componet = setupApp({ guessedWords })
        const guessWordProp = componet.instance().props.guessedWords;
        expect(guessWordProp).toEqual(guessedWords);
    })
    test('has `secretWord` ', () => {
        const secretWord = 'party';
        const componet = setupApp({ secretWord })
        const guessWordProp = componet.instance().props.secretWord;
        expect(guessWordProp).toEqual(secretWord);
    })
    test('getSecretWord action creator is a function props', () => {
        const wrapper = setupApp();
        const guessWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWord).toBeInstanceOf(Function);
    })

    test('`geetSecretWord` runs on App mount', () => {
        const getSecretWordMock = jest.fn();
        const props = {
            getSecretWord: getSecretWordMock,
            seccess: true,
            guessedWords: []
        }
        //set up getSecretWordMock as getSecretWord

        const wrapper = shallow(<UnconnectedApp {...props} />)


        wrapper.instance().componentDidMount();
        //run lifecycle method

        const getSecretWordMockCallCount = getSecretWordMock.mock.calls.length;

        expect(getSecretWordMockCallCount).toBe(1)
    })
})