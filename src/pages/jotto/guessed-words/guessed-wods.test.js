import GuessedWord from "./index";
import { setup, findByTestAttr, checkProps } from "../../../test-utils";

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWord, defaultProps)
})

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup(GuessedWord, { guessedWords: [] })
    });
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    })
    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0)
    })

    describe('if there are words guessed', () => {
        let wrapper;
        const guessedWords = [
            { guessedWord: 'train', letterMatchCount: 3 },
            { guessedWord: 'agile', letterMatchCount: 1 },
            { guessedWord: 'party', letterMatchCount: 5 },
        ]
        beforeEach(() => {
            wrapper = setup(GuessedWord, { guessedWords })
        });
        test('renders without error', () => {
            const component = findByTestAttr(wrapper, 'component-guessed-words');
            expect(component.length).toBe(1);
        })
        test('renders "guessed words" section', () => {
            const guessedWordNode = findByTestAttr(wrapper, 'guessed-words');
            expect(guessedWordNode.length).toBe(1);
        })
        test('corect number of guessed words', () => {
            const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
            expect(guessedWordsNodes.length).toBe(guessedWords.length);
        })
    })
})