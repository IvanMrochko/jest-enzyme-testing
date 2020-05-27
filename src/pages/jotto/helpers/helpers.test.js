import { getLetterMatchCount } from '.'

describe('getLetterMatchCount', () => {
    const secretWord = 'party';
    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord)
        expect(letterMatchCount).toBe(0);
    })

    test('return the corrent count where are 3 matching latters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord)
        expect(letterMatchCount).toBe(3);
    })

    test('returns correct count when there are duplicat letters in the guess', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord)
        expect(letterMatchCount).toBe(3);
    })
})