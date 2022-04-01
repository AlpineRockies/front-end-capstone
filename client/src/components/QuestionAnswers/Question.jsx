/* eslint-disable react/prop-types */
import React from 'react';

function Question({ questionBody, questionHelpfulness }) {
  const questionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div className="qa-question" style={questionStyle}>
      <span>
        <strong>Q: </strong>
        {questionBody}
      </span>
      <span>
        Helpful?
        {' '}
        <u>Yes</u>
        {` (${questionHelpfulness}) | `}
        <u>Add Answer</u>
      </span>
    </div>
  );
}

export default Question;
