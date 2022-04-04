/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

function Question({ questionId, questionBody, questionHelpfulness }) {
  const [markedHelpful, setMarkedHelpful] = useState(false);

  const questionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const handleMarkHelpful = () => markedHelpful || axios
    .put(`/qa/questions/${questionId}/helpful`)
    .then(() => setMarkedHelpful(true))
    // eslint-disable-next-line no-console
    .catch(console.error);

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter' || key === ' ') {
      handleMarkHelpful();
    }
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
        <span
          onClick={handleMarkHelpful}
          role="button"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          style={{ cursor: 'pointer' }}
        >
          <u>Yes</u>
          {` (${markedHelpful ? questionHelpfulness + 1 : questionHelpfulness})`}
        </span>
        {' | '}
        <u>Add Answer</u>
      </span>
    </div>
  );
}

export default Question;
