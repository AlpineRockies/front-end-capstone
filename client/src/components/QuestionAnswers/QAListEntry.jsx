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
  border-bottom: 2px solid var(--pullman-brown-ups-brown);
`;

const StyledAnswer = styled.div`
  display: inline-flex;
  flex-direction: column;
  max-height: 50vh;
  overflow-y: auto;
  width: 95%;
`;

const StyledButton = styled.button`
  border: 2px solid var(--cafe-noir);
  color: #faebd7;
  background-color: var(--ebony);
  max-width: 300px;
  text-transform: capitalize;
  font-variant-caps: small-caps;
  cursor: pointer;
  padding: 1em;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledMoreAnswers = styled(StyledButton)`
  margin-bottom: 1rem;
`;
