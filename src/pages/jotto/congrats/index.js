import React from "react";
import PropTypes from "prop-types";
/**
 * Functional react component for congratulation message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component or null if `success` is false
 */
const Congrats = ({ success }) => {
  return (
    <div className="alert alert-success" data-test="component-congrats">
      {success && (
        <span data-test="component-message">
          Congratulation you gessed the word!!!
        </span>
      )}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Congrats;
