import React from 'react';
import { createPortal } from 'react-dom';

function Modal({
  showModal,
  onClose,
  ModalForm,
  formData,
}) {
  if (!showModal) {
    return null;
  }

  const modalStyle = {
    position: 'fixed',
    // top, left, transform: centers the div
    top: '50%',
    left: '50%',
    transform: 'translate( -50%, -50% )',
    padding: '1em',
    borderRadius: '8px',
    background: 'rgba( 255, 255, 255, 0.87 )',
    boxShadow: '0 8px 32px 0 rgba( 32, 32, 32, 0.32 )',
    zIndex: 255,
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba( 50, 50, 50, 0.5 )',
    backdropFilter: 'blur( 10px )',
    zIndex: 254,
  };

  return createPortal(
    <>
      <div style={overlayStyle} />
      <div style={modalStyle}>
        <ModalForm onClose={onClose} formData={formData} />
      </div>
    </>,
    // eslint-disable-next-line no-undef
    document.getElementById('portal'),
  );
}

export default Modal;
