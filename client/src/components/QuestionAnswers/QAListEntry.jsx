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

  const answerStyle = {
    display: 'inline-flex',
    flexDirection: 'column',
  };

  const sortedAnswers = Object.values(answers).sort(compareHelpfulness);

  const handleMoreAnswers = () => {
    setShownAnswerCount(showMoreAnswers ? sortedAnswers.length : 2);
    setShowMoreAnswers((showMore) => !showMore);
  };

  return (
    <div className="qa-list-entry">
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
          <button onClick={handleMoreAnswers} type="button">
            {showMoreAnswers ? 'See more answers' : 'Collapse'}
          </button>
        )}
      </div>
    </div>
  );
}

export default QAListEntry;
