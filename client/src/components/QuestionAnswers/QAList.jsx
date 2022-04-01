/* eslint-disable no-console */
import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../Context';
import QAListEntry from './QAListEntry';

function QAList() {
  const { productId } = useContext(ProductContext);

  const [questions, setQuestions] = useState(() => []);
  const [render, setRender] = useState(() => (
    <p className="loading">Loading ...</p>
  ));

  // get list of questions
  useEffect(() => {
    axios
      .get(`/qa/questions?product_id=${productId}`)
      .then((response) => response.data.results)
      .then((newQuestions) => setQuestions(newQuestions))
      .catch(console.error);
  }, []);

  // update
  useEffect(
    () => setRender(
      questions.length && questions.map((question) => (
        <QAListEntry key={question.question_id} questionData={question} />
      )),
    ),
    [questions],
  );

  // map over list of questions and render a list entry for each
  return <div className="QA-list">{render}</div>;
}

export default QAList;
