import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

// eslint-disable-next-line object-curly-newline
export default function Modal({ showModal, onClose, ModalForm, formData }) {
  if (!showModal) {
    return null;
  }

  return createPortal(
    <>
      <StyledOverlay onClick={onClose} />
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
  /* artichoke, but 93% opacity */
  background-color: #939878ee;
  /* kombu-green, but 31% opacity */
  box-shadow: 0 8px 32px 0 #28361850;
  z-index: 255;
  font-family: 'Noto Sans', sans-serif;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* kombu-green, but 50% opacity */
  background-color: #28361877;
  backdrop-filter: blur(10px);
  z-index: 254;
`;
