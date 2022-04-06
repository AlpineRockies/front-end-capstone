/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';

export default function AddAnswerModal({ showModal, onClose, productData }) {
  if (!showModal) {
    return null;
  }

  const formRef = React.createRef();
  const { productName, questionId, questionBody } = productData;

  const [newAnswerBody, setNewAnswerBody] = useState('');
  const [newAnswerName, setNewAnswerName] = useState('');
  const [newAnswerEmail, setNewAnswerEmail] = useState('');
  const [newAnswerPhotos, setNewAnswerPhotos] = useState([]);

  const modalStyle = {
    position: 'fixed',
    // top, left, transform: centers the div
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '1em',
    borderRadius: '5px',
    backgroundColor: '#FFF',
    zIndex: 255,
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba( 0, 0, 0, 0.5 )',
    backdropFilter: 'blur( 4px )',
    zIndex: 254,
  };

  const handleUploadPhotos = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formRef.current.reportValidity()) {
      axios
        .post(`/qa/questions/${questionId}/answers`, {
          data: {
            body: newAnswerBody,
            name: newAnswerName,
            email: newAnswerEmail,
            photos: newAnswerPhotos,
          },
        })
        .then((res) => console.log(res, res.status, res.data));
    }
  };

  return createPortal(
    <>
      <div style={overlayStyle} />
      <div style={modalStyle}>
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
      </div>
    </>,
    // TODO: why does ESLint think `document` is undefined?
    // eslint-disable-next-line no-undef
    document.getElementById('portal'),
  );
}
