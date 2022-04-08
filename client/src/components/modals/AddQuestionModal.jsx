/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import axios from 'axios';

import ProductContext from '../Context';

export default function AddQuestionModal({ onClose }) {
  const formRef = React.createRef();

  const [newQuestionBody, setNewQuestionBody] = useState('');
  const [newQuestionName, setNewQuestionName] = useState('');
  const [newQuestionEmail, setNewQuestionEmail] = useState('');
  const { productId, productInfo } = useContext(ProductContext);

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
        .then(() => onClose())
        // eslint-disable-next-line no-console
        .catch(console.error);
    }
  };

  return (
    <form style={{ display: 'grid' }} ref={formRef} onSubmit={(e) => e.preventDefault()}>
      <button type="button" onClick={onClose}>
        ✖️
      </button>
      <h2>Ask Your Question</h2>
      <h3>{`About the ${productInfo.name}`}</h3>
      <label htmlFor="your-question" style={{ display: 'contents' }}>
        Your Question *
        <br />
        <textarea
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
        <input
          type="text"
          name="your-nickname"
          maxLength={60}
          placeholder="Example: jack543!"
          value={newQuestionName}
          onChange={(e) => setNewQuestionName(e.target.value)}
          required
        />
      </label>
      <span style={{ fontSize: '.87em' }}>
        <em>For privacy reasons, do not use your full name or email address</em>
      </span>
      <br />
      <label htmlFor="your-email" style={{ display: 'contents' }}>
        Your email *
        <br />
        <input
          type="email"
          name="your-email"
          maxLength={60}
          placeholder="Example: jack@email.com"
          value={newQuestionEmail}
          onChange={(e) => setNewQuestionEmail(e.target.value)}
          required
        />
      </label>
      <span style={{ fontSize: '.87em' }}>
        <em>For authentication reasons, you will not be emailed</em>
      </span>
      <br />
      <button type="button" onClick={(e) => handleSubmit(e)}>
        Submit Question
      </button>
    </form>
  );
}
