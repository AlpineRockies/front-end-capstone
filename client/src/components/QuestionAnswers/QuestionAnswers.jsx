import React, { useState } from 'react';
import _ from 'underscore';

import Search from './Search';
import QAList from './QAList';

function QuestionAnswers() {
  const [searchFilter, setSearchFilter] = useState('');

  const qaMainStyle = {
    position: 'relative',
    left: '5%',
    transform: 'translateX(-50%)',
    maxWidth: '960px',
    width: '87vw',
  };

  const lazySearch = _.debounce(setSearchFilter, 150);

  return (
    <div className="qa-main" style={qaMainStyle}>
      <h1>Questions and Answers</h1>
      <Search onSearch={(query) => lazySearch(query)} />
      <QAList filter={searchFilter} />
    </div>
  );
}

export default QuestionAnswers;
