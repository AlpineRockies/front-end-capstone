/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProductContext from '../Context';

export default function AddAnswerModal({ onClose, formData }) {
  const formRef = React.createRef();

  const { productName, questionId, questionBody } = formData;

  const { handleNewQorA } = useContext(ProductContext);

  const [newAnswerBody, setNewAnswerBody] = useState('');
  const [newAnswerName, setNewAnswerName] = useState('');
  const [newAnswerEmail, setNewAnswerEmail] = useState('');
  const [newAnswerPhotos, setNewAnswerPhotos] = useState([]);

  const handleUploadPhotos = (event) => {
    const newPhotoUrl = event.target.value;

    if (newPhotoUrl && newPhotoUrl.length && newAnswerPhotos.length <= 5) {
      setNewAnswerPhotos((photos) => [...photos, newPhotoUrl]);
    }
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
        .then(() => handleNewQorA())
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
        <StyledInput
          as="textarea"
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
      {newAnswerPhotos.length < 5 ? (
        <label htmlFor="your-photos" style={{ display: 'contents' }}>
          Upload your photos
          <StyledInput
            type="url"
            name="your-photos"
            placeholder="Example: https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
            onChange={handleUploadPhotos}
            style={{ marginBottom: '1rem' }}
          />
        </label>
      ) : (
        <div>Uploaded Photos</div>
      )}
      {newAnswerPhotos && newAnswerPhotos.length ? (
        <div>
          {newAnswerPhotos.map((url) => (
            <Thumbnail key={url} src={url} alt="This is a thumbnail" />
          ))}
        </div>
      ) : null}
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

  &:hover {
    text-shadow: 0 0 1px #00000077;
  }
`;

const StyledButton = styled.button`
  border: 2px solid var(--cafe-noir);
  color: var(--cafe-noir);
  background-color: var(--dutch-white);
  text-transform: capitalize;
  cursor: pointer;
  padding: 1em;
  margin-right: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledInput = styled.input`
  border: 2px solid var(--cafe-noir);
  padding: 0.5em;
  background-color: var(--dutch-white);

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

const Thumbnail = styled.img`
  object-fit: contain;
  width: 90px;
  height: 60px;
  margin-right: 1em;
  border: 2px solid var(--kombu-green);
  background-color: var(--artichoke);
`;
