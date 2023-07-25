import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackOptions.styled';

// const Button = ({ onLeaveFeedback, value }) => (
//   <button type="button" data-value={value} onClick={onLeaveFeedback}>
//     {value}
//   </button>
// );

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <ButtonList>
        {options.map(option => {
          return (
            <li key={option}>
              <Button
                type="button"
                data-value={option}
                // value={option}
                onClick={onLeaveFeedback}
              >
                {option}
              </Button>
            </li>
          );
        })}
      </ButtonList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
