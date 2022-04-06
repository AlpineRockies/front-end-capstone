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

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate inputs. inputs are invalid if:
    // - any mandatory fields are blank
    // - email address is not in the correct format
    // - images selected are invalid or unable to be uploaded
  };

  return createPortal(
    <>
      <div style={overlayStyle} />
      <div style={modalStyle}>
        <form style={{ display: 'grid' }}>
          <button type="button" onClick={onClose}>
            Close
          </button>
          <h2>Submit your Answer</h2>
          <h3>{`${productName}: ${questionBody}`}</h3>
          <label htmlFor="your-answer" style={{ display: 'contents' }}>
            Your Answer *
            <br />
            <textarea name="your-answer" rows={5} maxLength={1000} required />
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
              required
            />
          </label>
          <br />
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
              required
            />
          </label>
          <br />
          <span style={{ fontSize: '.87em' }}>
            <em>For authentication reasons, you will not be emailed</em>
          </span>
          <br />
          <button type="button" onClick={handleUploadPhotos}>
            Upload your photos
          </button>
          <input type="submit" onClick={(e) => handleSubmit(e)} value="Submit answer" />
        </form>
      </div>
    </>,
    // TODO: why does ESLint think `document` is undefined?
    // eslint-disable-next-line no-undef
    document.getElementById('portal'),
  );
}
