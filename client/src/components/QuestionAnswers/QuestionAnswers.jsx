import React, { useState } from 'react';
import Search from './Search';
import QAList from './QAList';

function QuestionAnswers() {
  const [searchFilter, setSearchFilter] = useState('');

  const qaMainStyle = {
    position: 'relative',
    left: '50vw',
    transform: 'translateX(-50%)',
    maxWidth: '960px',
    width: '87vw',
  };

  return (
    <div className="qa-main" style={qaMainStyle}>
      <h1>Questions and Answers</h1>
      <Search onSearch={(query) => setSearchFilter(query)} />
      <QAList filter={searchFilter} />
    </div>
  );
}

export default QuestionAnswers;
