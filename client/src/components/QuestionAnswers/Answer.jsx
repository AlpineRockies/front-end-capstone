/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import moment from 'moment';

function Answer({ answers }) {
  const [shownAnswerCount, setShownAnswerCount] = useState(() => 2);
  const [showMore, setShowMore] = useState(() => true);

  const answerStyle = {
    display: 'flex',
  };

  const sortedAnswers = Object.values(answers).sort(
    (a, b) => b.helpfulness - a.helpfulness,
  );

  const handleMoreAnswers = () => {
    setShownAnswerCount(() => (showMore ? sortedAnswers.length : 2));
    setShowMore((moreOrLess) => !moreOrLess);
  };

  return (
    <div className="qa-answer" style={answerStyle}>
      <span>
        <strong>A: </strong>
      </span>
      <span>
        {sortedAnswers.slice(0, shownAnswerCount).map((answer) => (
          <span key={answer.id}>
            <span>{answer.body}</span>
            <br />
            <span>by </span>
            {answer.answerer_name}
            <span>, </span>
            {moment(answer.date).format('MMM Do, YYYY')}
            <span> | Helpful? </span>
            <u>Yes</u>
            {` (${answer.helpfulness}) | `}
            <u>Report</u>
            <br />
            <br />
          </span>
        ))}
        <button onClick={handleMoreAnswers} type="button">
          {showMore ? 'See more answers' : 'Collapse'}
        </button>
      </span>
    </div>
  );
}

export default Answer;
