import { actionTypes } from './jottoActions'
/** 
* @function guessedWordsReducer
* @param {array} state - Array of guessed words
* @param {object} action -  action to be reduced.
* @returns {arrry} - new success state.
*/
export default (state = [], action) => {
    switch (action.type) {
        case (actionTypes.GUESS_WORD):
            return [...state, action.payload];
        default:
            return state;
    }
}