/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function AddAnswerModal({ onClose, formData }) {
  const formRef = React.createRef();

  const { productName, questionId, questionBody } = formData;

  const [newAnswerBody, setNewAnswerBody] = useState('');
  const [newAnswerName, setNewAnswerName] = useState('');
  const [newAnswerEmail, setNewAnswerEmail] = useState('');
  const [newAnswerPhotos, setNewAnswerPhotos] = useState([]);

  const handleUploadPhotos = () => {
    /* TODO: */
    setNewAnswerPhotos([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formRef.current.reportValidity()) {
      axios
        .post(`/qa/questions/${questionId}/answers`, {
          body: newAnswerBody,
          name: newAnswerName,
          email: newAnswerEmail,
          photos: newAnswerPhotos,
        })
        .then(() => onClose())
        // eslint-disable-next-line no-console
        .catch(console.error);
    }
  };

  return (
    <form style={{ display: 'grid' }} ref={formRef} onSubmit={(e) => e.preventDefault()}>
      <CloseButton type="button" onClick={onClose}>
        ✖️
      </CloseButton>
      <h2 style={{ margin: 0 }}>Submit your Answer</h2>
      <h3>{`${productName}: ${questionBody}`}</h3>
      <label htmlFor="your-answer" style={{ display: 'contents' }}>
        Your Answer *
        <br />
        <StyledTextArea
          name="your-answer"
          rows={5}
          maxLength={1000}
          value={newAnswerBody}
          onChange={(e) => setNewAnswerBody(e.target.value)}
          required
        />
      </label>
      <br />
      <label htmlFor="your-nickname" style={{ display: 'contents' }}>
        What is your nickname *
        <br />
        <StyledInput
          type="text"
          name="your-nickname"
          maxLength={60}
          placeholder="Example: jack543!"
          value={newAnswerName}
          onChange={(e) => setNewAnswerName(e.target.value)}
          required
        />
      </label>
      <StyledDisclaimer>
        <em>For privacy reasons, do not use your full name or email address</em>
      </StyledDisclaimer>
      <br />
      <label htmlFor="your-email" style={{ display: 'contents' }}>
        Your email *
        <br />
        <StyledInput
          type="email"
          name="your-email"
          maxLength={60}
          placeholder="Example: jack@email.com"
          value={newAnswerEmail}
          onChange={(e) => setNewAnswerEmail(e.target.value)}
          required
        />
      </label>
      <StyledDisclaimer>
        <em>For authentication reasons, you will not be emailed</em>
      </StyledDisclaimer>
      <br />
      <StyledButton type="button" onClick={handleUploadPhotos} style={{ marginBottom: '1rem' }}>
        Upload your photos
      </StyledButton>
      <StyledButton type="button" onClick={(e) => handleSubmit(e)}>
        Submit answer
      </StyledButton>
    </form>
  );
}

const CloseButton = styled.button`
  width: fit-content;
  position: fixed;
  justify-self: end;
  background: none;
  border: none;
`;

const StyledButton = styled.button`
  border: 1px solid var(--cafe-noir);
  color: var(--cafe-noir);
  text-transform: capitalize;
  cursor: pointer;
  padding: 1em;
`;

const StyledTextArea = styled.textarea`
  border: 1px solid var(--cafe-noir);
  &:focus {
    outline-style: solid;
    outline-color: var(--cafe-noir);
    outline-width: 1px;
    transition-duration: 100ms;
  }
`;

const StyledInput = styled.input`
  border: 1px solid var(--cafe-noir);
  &:focus {
    outline-style: solid;
    outline-color: var(--cafe-noir);
    outline-width: 1px;
    transition-duration: 100ms;
  }
`;

const StyledDisclaimer = styled.span`
  font-size: 0.87em;
  justify-self: right;
`;
