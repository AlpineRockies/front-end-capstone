/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

function Answer({ answers }) {
  const answerStyle = {
    display: 'flex',
  };

  return (
    <div className="qa-answer" style={answerStyle}>
      <span>
        <strong>A: </strong>
      </span>
      <span>
        {Object.values(answers).map((answer) => (
          <span key={answer.id}>
            <span>{answer.body}</span>
            <br />
            <span>by </span>
            {answer.answerer_name}
            <span>, </span>
            {moment(answer.date).format()}
            <span> | Helpful? </span>
            <u>Yes</u>
            {` (${answer.helpfulness}) | `}
            <u>Report</u>
            <br />
            <br />
          </span>
        ))}
      </span>
    </div>
  );
}

export default Answer;
