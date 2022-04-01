import React from 'react';
import Search from './Search';
import QAList from './QAList';

function QuestionAnswers() {
  return (
    <div className="qa-main">
      <h1>Q and A</h1>
      <Search />
      <QAList />
    </div>
  );
}

export default QuestionAnswers;
