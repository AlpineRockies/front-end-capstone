import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';

// eslint-disable-next-line import/no-unresolved
import { compareHelpfulness } from 'Utilities';
import ProductContext from '../Context';
import QAListEntry from './QAListEntry';

function QAList() {
  const { productId } = useContext(ProductContext);

  const initialQuestionCount = 4;

  const [questions, setQuestions] = useState([]);
  const [shownQuestionCount, setShownQuestionCount] = useState(initialQuestionCount);
  const [renderedItems, setRenderedItems] = useState(<p className="loading">Loading ...</p>);

  const handleMoreQuestions = () => setShownQuestionCount(questions.length);

  // get list of questions
  useEffect(() => {
    axios
      .get(`/qa/questions?product_id=${productId}`)
      .then((response) => response.data.results)
      .then((newQuestions) => {
        setQuestions(newQuestions.sort(compareHelpfulness));
        setShownQuestionCount(initialQuestionCount);
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  }, [productId]);

  // update rendered questions
  useEffect(() => {
    if (questions.length) {
      const renderedQuestions = questions.slice(0, shownQuestionCount);

      setRenderedItems(
        renderedQuestions.map((question) => (
          <QAListEntry key={question.question_id} questionData={question} />
        )),
      );
    }
  }, [questions, shownQuestionCount]);

  return (
    <div className="QA-list">
      {renderedItems}
      {shownQuestionCount < questions.length ? (
        <button type="button" onClick={handleMoreQuestions}>
          More Answered Questions
        </button>
      ) : null}
    </div>
  );
}

export default QAList;
