import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'underscore';

import Search from './Search';
import QAList from './QAList';

export default function QuestionAnswers() {
  const [searchFilter, setSearchFilter] = useState('');

  const lazySearch = _.debounce(setSearchFilter, 150);

  return (
    <QAMainDiv>
      <h1>Questions and Answers</h1>
      <Search onSearch={(query) => lazySearch(query)} />
      <QAList filter={searchFilter} />
    </QAMainDiv>
  );
}

const QAMainDiv = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1280px;
  width: 87vw;
  margin: 2rem 0;
`;
