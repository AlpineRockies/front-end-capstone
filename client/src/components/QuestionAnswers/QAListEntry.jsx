/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved
import { compareHelpfulness } from 'Utilities';

import Question from './Question';
import Answer from './Answer';

export default function QAListEntry({ questionData }) {
  const [shownAnswerCount, setShownAnswerCount] = useState(2);
  const [showMoreAnswers, setShowMoreAnswers] = useState(true);

  const {
    question_id: questionId,
    question_body: questionBody,
    question_helpfulness: questionHelpfulness,
    answers,
  } = questionData;

  const sortedAnswers = Object.values(answers).sort(compareHelpfulness);

  const handleMoreAnswers = () => {
    setShownAnswerCount(showMoreAnswers ? sortedAnswers.length : 2);
    setShowMoreAnswers((showMore) => !showMore);
  };

  return (
    <StyledEntry>
      <Question
        questionId={questionId}
        questionBody={questionBody}
        questionHelpfulness={questionHelpfulness}
      />
      <span>
        <strong>A: </strong>
      </span>
      <StyledAnswer>
        {sortedAnswers.slice(0, shownAnswerCount).map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
        {sortedAnswers.length > 2 && (
          <StyledMoreAnswers onClick={handleMoreAnswers} type="button">
            {showMoreAnswers ? 'See more answers' : 'Collapse'}
          </StyledMoreAnswers>
        )}
      </StyledAnswer>
    </StyledEntry>
  );
}

const StyledEntry = styled.div`
  margin-bottom: 0.5em;
  border-bottom: 2px solid var(--artichoke);
`;

const StyledAnswer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

// TODO: lift this into a styled components file
const StyledButton = styled.button`
  border: 1px solid var(--cafe-noir);
  color: var(--cafe-noir);
  max-width: 300px;
  text-transform: capitalize;
  cursor: pointer;
  padding: 1em;
  margin-right: 1rem;
`;

const StyledMoreAnswers = styled(StyledButton)`
  margin-bottom: 1rem;
`;
