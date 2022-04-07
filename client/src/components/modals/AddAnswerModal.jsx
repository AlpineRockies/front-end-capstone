/* eslint-disable react/prop-types */
import React, { useState } from 'react';
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
      <button type="button" onClick={onClose}>
        Close
      </button>
      <h2>Submit your Answer</h2>
      <h3>{`${productName}: ${questionBody}`}</h3>
      <label htmlFor="your-answer" style={{ display: 'contents' }}>
        Your Answer *
        <br />
        <textarea
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
        <input
          type="text"
          name="your-nickname"
          maxLength={60}
          placeholder="Example: jack543!"
          value={newAnswerName}
          onChange={(e) => setNewAnswerName(e.target.value)}
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
          value={newAnswerEmail}
          onChange={(e) => setNewAnswerEmail(e.target.value)}
          required
        />
      </label>
      <span style={{ fontSize: '.87em' }}>
        <em>For authentication reasons, you will not be emailed</em>
      </span>
      <br />
      <button type="button" onClick={handleUploadPhotos}>
        Upload your photos
      </button>
      <button type="button" onClick={(e) => handleSubmit(e)}>
        Submit answer
      </button>
    </form>
  );
}
