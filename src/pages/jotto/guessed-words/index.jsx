import React from 'react'
import PropTypes from 'prop-types';

const GuessedWord = ({ guessedWords }) => {
    const guessedWordsRows = guessedWords.map((word, index) => (
        <tr key={word.guessedWord} data-test="guessed-word">
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
        </tr>
    ))
    return (
        <div data-test="component-guessed-words">
            {guessedWords.length === 0
                ? <span data-test="guess-instructions">Try to guess the secret word</span>
                : <div data-test="guessed-words">
                    <h3>Guessed Words</h3>
                    <table className="table table-sm">
                        <thead className="thead-light">
                            <tr><th>Guess</th><th>Matching latters</th></tr>
                        </thead>
                        <tbody>
                            {guessedWordsRows}
                        </tbody>
                    </table>
                </div>
            }

        </div>
    )
}

GuessedWord.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired

        })
    ).isRequired
}
export default GuessedWord;