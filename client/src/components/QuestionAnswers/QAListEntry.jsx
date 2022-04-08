/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// eslint-disable-next-line import/no-unresolved
import { compareHelpfulness } from 'Utilities';

import Question from './Question';
import Answer from './Answer';

function QAListEntry({ questionData }) {
  const [shownAnswerCount, setShownAnswerCount] = useState(2);
  const [showMoreAnswers, setShowMoreAnswers] = useState(true);

  const {
    question_id: questionId,
    question_body: questionBody,
    question_helpfulness: questionHelpfulness,
    answers,
  } = questionData;

  const entryStyle = {
    marginBottom: '.5em',
  };

  const answerStyle = {
    display: 'inline-flex',
    flexDirection: 'column',
  };

  const moreAnswersStyle = {
    border: '1px solid gray',
    maxWidth: '300px',
    textTransform: 'capitalize',
    cursor: 'pointer',
    padding: '.5em',
    backgroundColor: '#fff',
  };

  const sortedAnswers = Object.values(answers).sort(compareHelpfulness);

  const handleMoreAnswers = () => {
    setShownAnswerCount(showMoreAnswers ? sortedAnswers.length : 2);
    setShowMoreAnswers((showMore) => !showMore);
  };

  return (
    <div className="qa-list-entry" style={entryStyle}>
      <Question
        questionId={questionId}
        questionBody={questionBody}
        questionHelpfulness={questionHelpfulness}
      />
      <span>
        <strong>A: </strong>
      </span>
      <div className="qa-answer" style={answerStyle}>
        {sortedAnswers.slice(0, shownAnswerCount).map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
        {sortedAnswers.length > 2 && (
          <button onClick={handleMoreAnswers} type="button" style={moreAnswersStyle}>
            {showMoreAnswers ? 'See more answers' : 'Collapse'}
          </button>
        )}
      </div>
      <hr style={{ border: '1px solid lightgray' }} />
    </div>
  );
}

export default QAListEntry;
