/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import AddAnswerModal from '../modals/AddAnswerModal';
import ProductContext from '../Context';
import Modal from '../modals/Modal';

export default function Question({ questionId, questionBody, questionHelpfulness }) {
  const [markedHelpful, setMarkedHelpful] = useState(false);
  const [showAddAnswer, setShowAddAnswer] = useState(false);

  const productName = useContext(ProductContext).productInfo.name;

  const handleMarkHelpful = () => markedHelpful || axios
    .put(`/qa/questions/${questionId}/helpful`)
    .then(() => setMarkedHelpful(true))
    // eslint-disable-next-line no-console
    .catch(console.error);

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter' || key === ' ') {
      handleMarkHelpful();
    }
  };

  return (
    <>
      <StyledQuestion>
        <span>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <strong>Q: {questionBody}</strong>
        </span>
        <span>
          Helpful?
          {' '}
          <span
            onClick={handleMarkHelpful}
            role="button"
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            style={{ cursor: 'pointer' }}
          >
            <u>Yes</u>
            {` (${markedHelpful ? questionHelpfulness + 1 : questionHelpfulness})`}
          </span>
          {' | '}
          <span
            onClick={() => setShowAddAnswer(true)}
            onKeyDown={() => {}}
            role="button"
            tabIndex={-1}
            style={{ cursor: 'pointer' }}
          >
            <u>Add Answer</u>
          </span>
        </span>
      </StyledQuestion>
      <Modal
        showModal={showAddAnswer}
        onClose={() => setShowAddAnswer(false)}
        ModalForm={AddAnswerModal}
        formData={{ productName, questionId, questionBody }}
      />
    </>
  );
}

const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;
