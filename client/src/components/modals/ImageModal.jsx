/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export default function ImageModal({ onClose, formData }) {
  return (
    <div  onClick={onClose}>
      <Image src={formData} alt="Worth a thousand words" />
    </div>
  );
}

const Image = styled.img`
  max-width: 75vw;
  max-height: 75vh;
  object-fit: cover;
`;
