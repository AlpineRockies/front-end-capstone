/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export default function ImageModal({ onClose, formData }) {
  return <Image onClick={onClose} src={formData} alt="Worth a thousand words" />;
}

const Image = styled.img`
  max-width: 75vw;
  max-height: 75vh;
  object-fit: cover;
`;
