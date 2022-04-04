import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';

// eslint-disable-next-line import/no-unresolved
import { compareHelpfulness } from 'Utilities';
import ProductContext from '../Context';
import QAListEntry from './QAListEntry';

function QAList() {
  const { productId } = useContext(ProductContext);

  // TODO: Clarify BRD initial question display count
  // Section 1.3.1: "on page load up to four questions should be displayed"
  // Section 1.3.4: "The list will by default only display up to 2 questions asked"
  const initialQuestionCount = 4;

  const [questions, setQuestions] = useState([]);
  const [shownQuestionCount, setShownQuestionCount] = useState(initialQuestionCount);
  const [renderedItems, setRenderedItems] = useState(<p className="loading">Loading ...</p>);

  const handleMoreQuestions = () => setShownQuestionCount((count) => count + 2);

  const fetchQuestions = (questionCount) => axios
    .get(`/qa/questions?product_id=${productId}&count=${questionCount}`)
    .then((response) => response.data.results)
    .then((newQuestions) => setQuestions(newQuestions.sort(compareHelpfulness)))
    // eslint-disable-next-line no-console
    .catch(console.error);

  // get initial list of questions when productId changes
  useEffect(() => {
    fetchQuestions(initialQuestionCount)
      .then(() => setShownQuestionCount(initialQuestionCount))
      // eslint-disable-next-line no-console
      .catch(console.error);
  }, [productId]);

  // fetch more questions when shown question count changes
  useEffect(() => {
    if (shownQuestionCount === initialQuestionCount) {
      return;
    }

    // eslint-disable-next-line no-console
    fetchQuestions(shownQuestionCount).catch(console.error);
  }, [shownQuestionCount]);

  // update rendered questions
  useEffect(() => {
    // TODO: Do I need this check?
    // What if a pruduct just doesn't have any questions yet?
    if (!questions || !questions.length) {
      return;
    }

    const renderedQuestions = questions.slice(0, shownQuestionCount);

    setRenderedItems(
      renderedQuestions.map((question) => (
        <QAListEntry key={question.question_id} questionData={question} />
      )),
    );
  }, [questions]);

  return (
    <div className="QA-list">
      {renderedItems}
      {shownQuestionCount <= questions.length ? (
        <button type="button" onClick={handleMoreQuestions}>
          More Answered Questions
        </button>
      ) : null}
    </div>
  );
}

export default QAList;
