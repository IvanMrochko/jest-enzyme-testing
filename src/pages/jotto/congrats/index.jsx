import React from "react";


/**
 * Functional react component for congratulation message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component or null if `success` is false  
 */
export default ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success && <span data-test="component-message">Congratulation you gessed the word!!!</span>}
    </div>
  );
};
