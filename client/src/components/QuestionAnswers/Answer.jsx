/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';

export default function Answer({
  answer: {
    id,
    body,
    answerer_name: answerer,
    date,
    helpfulness,
    photos,
  },
}) {
  const [markedHelpful, setMarkedHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const [photosOrNah, setPhotosOrNah] = useState(null);

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

  useEffect(() => {
    if (photos && photos.length) {
      setPhotosOrNah(
        <>
          {photos.map((url) => (
            <Thumbnail key={url} src={url} alt="An answer worth a thousand words" />
          ))}
          <br />
        </>,
      );
    }
  }, []);

  return (
    <span key={id}>
      <span>{body}</span>
      <br />
      {photosOrNah}
      <span>by </span>
      {answerer}
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

const Thumbnail = styled.img`
  object-fit: cover;
  width: 90px;
  height: 60px;
  margin-right: 1em;
`;
