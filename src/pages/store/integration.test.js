import { storeFactory } from "../../test-utils";
import { guessWord } from "./jottoActions";

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfullGuess = 'train';

    describe('no guessed words', () => {
        let store;
        const initialState = { secretWord }
        beforeEach(() => {
            store = storeFactory(initialState)
        })
        test('update state correctly for unsuccessfull guess', () => {
            store.dispatch(guessWord(unsuccessfullGuess));
            const newState = store.getState();
            const expectedStore = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfullGuess,
                    letterMatchCount: 3
                }]
            }
            expect(newState).toEqual(expectedStore)
        });
        test('update state correctly for succesfull guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedStore = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedStore)
        });
    })

    describe('some guessed words', () => {
        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }]
        const initialState = { guessedWords, secretWord }
        let store;
        beforeEach(() => {
            store = storeFactory(initialState)
        })
        test('update state correctly for unsuccessfull guess', () => {
            store.dispatch(guessWord(unsuccessfullGuess));
            const newState = store.getState();
            const expectedStore = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, {
                    guessedWord: unsuccessfullGuess,
                    letterMatchCount: 3
                }]
            }
            expect(newState).toEqual(expectedStore)
        });
        test('update state correctly for succesfull guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedStore = {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, {
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedStore)
        });
    })
})

