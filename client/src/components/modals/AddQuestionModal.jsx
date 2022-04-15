/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProductContext from '../Context';

export default function AddQuestionModal({ onClose }) {
  const formRef = React.createRef();

  const [newQuestionBody, setNewQuestionBody] = useState('');
  const [newQuestionName, setNewQuestionName] = useState('');
  const [newQuestionEmail, setNewQuestionEmail] = useState('');
  const { productId, productInfo, handleNewQorA } = useContext(ProductContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formRef.current.reportValidity()) {
      axios
        .post('/qa/questions', {
          body: newQuestionBody,
          name: newQuestionName,
          email: newQuestionEmail,
          product_id: +productId,
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
      <h2 style={{ margin: 0 }}>Ask Your Question</h2>
      <h3>{`About the ${productInfo.name}`}</h3>
      <label htmlFor="your-question" style={{ display: 'contents' }}>
        Your Question *
        <br />
        <StyledTextArea
          name="your-question"
          rows={5}
          maxLength={1000}
          value={newQuestionBody}
          onChange={(e) => setNewQuestionBody(e.target.value)}
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
          value={newQuestionName}
          onChange={(e) => setNewQuestionName(e.target.value)}
          required
        />
      </label>
      <StyledDisclaimer style={{ fontSize: '.87em' }}>
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
          value={newQuestionEmail}
          onChange={(e) => setNewQuestionEmail(e.target.value)}
          required
        />
      </label>
      <StyledDisclaimer style={{ fontSize: '.87em' }}>
        <em>For authentication reasons, you will not be emailed</em>
      </StyledDisclaimer>
      <br />
      <StyledButton type="button" onClick={(e) => handleSubmit(e)}>
        Submit Question
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

const StyledTextArea = styled.textarea`
  border: 2px solid var(--cafe-noir);
  background-color: var(--dutch-white);

  &:focus {
    outline-style: solid;
    outline-color: var(--cafe-noir);
    outline-width: 1px;
    transition-duration: 100ms;
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
