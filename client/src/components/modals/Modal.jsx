import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export default function Modal({
  showModal,
  onClose,
  ModalForm,
  formData,
}) {
  if (!showModal) {
    return null;
  }

  return createPortal(
    <>
      <StyledOverlay />
      <StyledModal>
        <ModalForm onClose={onClose} formData={formData} />
      </StyledModal>
    </>,
    // eslint-disable-next-line no-undef
    document.getElementById('portal'),
  );
}

const StyledModal = styled.div`
  position: fixed;
  /* top, left, transform: centers the div */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.87);
  box-shadow: 0 8px 32px 0 rgba(32, 32, 32, 0.32);
  z-index: 255;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(50, 50, 50, 0.5);
  backdrop-filter: blur(10px);
  z-index: 254;
`;
