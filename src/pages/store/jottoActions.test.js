import { correctGuess, actionTypes } from './jottoActions';

describe('correctGuess', () => {
    test('returns an actions with `CORRECT_SUCCUESS`', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
    })
})