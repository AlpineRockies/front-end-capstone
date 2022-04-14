/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// eslint-disable-next-line import/no-unresolved
import { compareHelpfulness, questionFilterTest } from 'Utilities';
import ProductContext from '../Context';
import QAListEntry from './QAListEntry';
import AddQuestionModal from '../modals/AddQuestionModal';
import Modal from '../modals/Modal';

export default function QAList({ filter }) {
  const { productId, setHandleNewQorA } = useContext(ProductContext);

  // § 1.3.1: "on page load up to four questions should be displayed"
  // § 1.3.4: "The list will by default only display up to 2 questions asked"
  // I went with 2 because it looks better ¯\_(ツ)_/¯
  const initialQuestionCount = 2;

  const [questions, setQuestions] = useState([]);
  const [shownQuestionCount, setShownQuestionCount] = useState(initialQuestionCount);
  const [renderedItems, setRenderedItems] = useState(<p className="loading">Loading ...</p>);
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  const fetchQuestions = (questionCount) => axios
    .get(`/qa/questions?product_id=${productId}&count=${questionCount}`)
    .then((response) => response.data.results)
    .then((newQuestions) => {
      setQuestions(newQuestions.sort(compareHelpfulness));

      if (questionCount <= newQuestions.length) {
        fetchQuestions(questionCount + 42);
      }
    })
    // eslint-disable-next-line no-console
    .catch(console.error);

  useEffect(() => {
    fetchQuestions(42)
      .then(() => setShownQuestionCount(initialQuestionCount))
      // eslint-disable-next-line no-console
      .catch(console.error);
  }, [productId]);

  useEffect(() => {
    if (questions && questions.length) {
      const filteredQuestions = filter
        ? questions.filter((question) => questionFilterTest(question, filter))
        : questions;

      const renderedQuestions = filteredQuestions.slice(0, shownQuestionCount);

      setRenderedItems(
        renderedQuestions.map((question) => (
          <QAListEntry key={question.question_id} questionData={question} />
        )),
      );

      setHandleNewQorA(() => () => fetchQuestions(questions.length + 1));
    }
  }, [questions, shownQuestionCount, filter]);

  return (
    <>
      <div className="QA-list">{renderedItems}</div>
      {shownQuestionCount < questions.length ? (
        <button type="button" onClick={() => setShownQuestionCount((count) => count + 2)}>
          More Answered Questions
        </button>
      ) : null}
      <button type="button" onClick={() => setShowAddQuestion(true)}>
        Add a question
      </button>
      <Modal
        showModal={showAddQuestion}
        onClose={() => setShowAddQuestion(false)}
        ModalForm={AddQuestionModal}
      />
    </>
  );
}

const StyledButton = styled.button`
  border: 2px solid var(--cafe-noir);
  color: var(--cafe-noir);
  background-color: var(--dutch-white);
  text-transform: capitalize;
  cursor: pointer;
  min-width: 200px;
  padding: 1em;
  margin-right: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
