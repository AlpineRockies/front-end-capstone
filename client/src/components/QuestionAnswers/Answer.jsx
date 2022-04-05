/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';

export default function Answer({ answer }) {
  const [markedHelpful, setMarkedHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const {
    id,
    body,
    answerer_name: answererName,
    date,
    helpfulness,
  } = answer;

  const handleMarkHelpful = () => markedHelpful || axios
    .put(`/qa/answers/${id}/helpful`)
    .then(() => setMarkedHelpful(true))
    // eslint-disable-next-line no-console
    .catch(console.error);

  const handleReportAnswer = () => reported || axios
    .put(`/qa/answers/${id}/report`)
    .then(() => setReported(true))
    // eslint-disable-next-line no-console
    .catch(console.error);

  const handleKeyDown = (event) => {
    const { key } = event;

    if (key === 'Enter' || key === ' ') {
      if (/Yes/.test(event.target.value)) {
        handleMarkHelpful();
      } else {
        handleReportAnswer();
      }
    }
  };

  return (
    <span key={id}>
      <span>{body}</span>
      <br />
      <span>by </span>
      {answererName}
      <span>, </span>
      {moment(date).format('MMM Do, YYYY')}
      <span> | Helpful? </span>
      <span
        onClick={handleMarkHelpful}
        role="button"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        style={{ cursor: 'pointer' }}
      >
        <u>Yes</u>
        {` (${markedHelpful ? helpfulness + 1 : helpfulness})`}
      </span>
      {' | '}
      <span
        onClick={handleReportAnswer}
        role="button"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        style={{ cursor: 'pointer', textDecoration: 'underline' }}
      >
        {reported ? 'Reported' : 'Report'}
      </span>
      <br />
      <br />
    </span>
  );
}
