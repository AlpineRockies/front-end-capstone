/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';

function Answer({ answer }) {
  const [markedHelpful, setMarkedHelpful] = useState(false);

  const handleMarkHelpful = (answerId) => markedHelpful || axios
    .put(`/qa/answers/${answerId}/helpful`)
    .then(() => setMarkedHelpful(true))
    // eslint-disable-next-line no-console
    .catch(console.error);

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter' || key === ' ') {
      handleMarkHelpful();
    }
  };

  return (
    <span key={answer.id}>
      <span>{answer.body}</span>
      <br />
      <span>by </span>
      {answer.answerer_name}
      <span>, </span>
      {moment(answer.date).format('MMM Do, YYYY')}
      <span> | Helpful? </span>
      <span
        onClick={() => handleMarkHelpful(answer.id)}
        role="button"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        style={{ cursor: 'pointer' }}
      >
        <u>Yes</u>
        {` (${markedHelpful ? answer.helpfulness + 1 : answer.helpfulness})`}
      </span>
      {' | '}
      <u>Report</u>
      <br />
      <br />
    </span>
  );
}

export default Answer;
