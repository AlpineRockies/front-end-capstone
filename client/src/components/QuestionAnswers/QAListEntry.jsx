/* eslint-disable react/prop-types */
import React from 'react';

import Question from './Question';
import Answer from './Answer';

function QAListEntry({ questionData }) {
  const {
    question_id: questionId,
    question_body: questionBody,
    // question_date: questionDate,
    // asker_name: askerName,
    question_helpfulness: questionHelpfulness,
    // reported,
    answers,
  } = questionData;

  return (
    <div className="qa-list-entry">
      <Question
        questionId={questionId}
        questionBody={questionBody}
        questionHelpfulness={questionHelpfulness}
      />
      <Answer answers={answers} />
    </div>
  );
}

export default QAListEntry;
