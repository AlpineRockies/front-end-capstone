/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

function QAListEntry({ questionData }) {
  const {
    question_body: questionBody,
    // question_date: questionDate,
    // asker_name: askerName,
    question_helpfulness: questionHelpfulness,
    // reported,
    answers,
  } = questionData;

  const questionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const answerStyle = {
    display: 'flex',
  };

  console.log(Object.values(answers));

  return (
    <div className="qa-list-entry">
      {/* TODO: factor into a component */}
      <div className="qa-question" style={questionStyle}>
        <span>
          <strong>Q: </strong>
          {questionBody}
        </span>
        <span>
          Helpful?
          {' '}
          <u>Yes</u>
          {`(${questionHelpfulness})`}
          {' | '}
          <u>Add Answer</u>
        </span>
      </div>
      {/* TODO: factor into a component */}
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
    </div>
  );
}

export default QAListEntry;
