/* eslint-disable react/prop-types */
import React from 'react';
// import { createPortal } from 'react-dom';

export default function AddAnswerModal({ showModal, onClose }) {
  if (!showModal) {
    return null;
  }

  const greeting = 'Hello, modal';

  const modalStyle = {
    position: 'fixed',
    // top, left, transform centers the div
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
    backdropFilter: 'blur( 2.5px )',
    zIndex: 254,
  };

  return (
    <>
      <div style={overlayStyle} />
      <div style={modalStyle}>
        <button type="button" onClick={onClose}>Close</button>
        {greeting}
      </div>
    </>
  );
}
