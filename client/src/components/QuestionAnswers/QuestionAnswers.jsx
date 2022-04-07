import React, { useState } from 'react';
import Search from './Search';
import QAList from './QAList';

function QuestionAnswers() {
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div className="qa-main">
      <h1>Q and A</h1>
      <Search onSearch={(query) => setSearchFilter(query)} />
      <QAList filter={searchFilter} />
    </div>
  );
}

export default QuestionAnswers;
