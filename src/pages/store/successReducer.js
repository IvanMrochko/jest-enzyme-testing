import { setup } from "../../test-utils"
import { actionTypes } from './jottoActions'
/** 
* @function successReducer
* @param {array} state - Array of guessed words
* @param {object} action -  action to be reduced.
* @returns {bolean} - new success state.
*/
export default (state = false, action) => {
    switch (action.type) {
        case (actionTypes.CORRECT_GUESS):
            return true;
        default:
            return state;
    }
}