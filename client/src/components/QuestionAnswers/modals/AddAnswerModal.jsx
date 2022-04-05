/* eslint-disable react/prop-types */
import React from 'react';
import { createPortal } from 'react-dom';

export default function AddAnswerModal({ showModal, onClose, productData }) {
  if (!showModal) {
    return null;
  }

  const { productName, questionBody } = productData;

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

  const handleSubmit = () => {
    // validate inputs. inputs are invalid if:
    // - any mandatory fields are blank
    // - email address is not in the correct format
    // - images selected are invalid or unable to be uploaded
  };

  return createPortal(
    <>
      <div style={overlayStyle} />
      <div style={modalStyle}>
        <button type="button" onClick={onClose}>
          Close
        </button>
        <h2>Submit your Answer</h2>
        <h3>{`${productName}: ${questionBody}`}</h3>
        <label htmlFor="your-answer">Your Answer *</label>
        <br />
        <textarea id="your-answer" name="your-answer" maxLength={1000} required />
        <br />
        <label htmlFor="your-nickname">What is your nickname *</label>
        <br />
        <input
          type="text"
          id="your-nickname"
          name="your-nickname"
          maxLength={60}
          placeholder="Example: jack543!"
          required
        />
        <br />
        <span>
          <em>For privacy reasons, do not use your full name or email address</em>
        </span>
        <br />
        <label htmlFor="your-email">Your email *</label>
        <br />
        <input
          type="email"
          id="your-email"
          name="your-email"
          maxLength={60}
          placeholder="Example: jack@email.com"
          required
        />
        <br />
        <span>
          <em>For authentication reasons, you will not be emailed</em>
        </span>
        <br />
        <button type="button" onClick={handleUploadPhotos}>
          Upload your photos
        </button>
        <button type="button" onClick={handleSubmit}>
          Submit answer
        </button>
      </div>
    </>,
    // TODO: why does ESLint think `document` is undefined?
    // eslint-disable-next-line no-undef
    document.getElementById('portal'),
  );
}
