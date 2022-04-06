import React, { useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';

import ProductContext from '../../Context';

export default function AddQuestionModal({ showModal, onClose }) {
  if (!showModal) {
    return null;
  }

  const formRef = React.createRef();

  const [newQuestionBody, setNewQuestionBody] = useState('');
  const [newQuestionName, setNewQuestionName] = useState('');
  const [newQuestionEmail, setNewQuestionEmail] = useState('');
  const { productId, productInfo } = useContext(ProductContext);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formRef.current.reportValidity()) {
      axios
        .post('/qa/questions', {
          body: newQuestionBody,
          name: newQuestionName,
          email: newQuestionEmail,
          product_id: productId,
        })
        .then(() => onClose())
        // eslint-disable-next-line no-console
        .catch(console.error);
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
      </div>
    </>,
    // TODO: why does ESLint think `document` is undefined?
    // eslint-disable-next-line no-undef
    document.getElementById('portal'),
  );
}
