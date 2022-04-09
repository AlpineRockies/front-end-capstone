/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved
import { escapeValue } from 'Utilities';

export default function Search({ onSearch }) {
  const handleChange = (event) => {
    const newQuery = escapeValue(event.target.value);

    if (newQuery.length > 2) {
      onSearch(newQuery);
    } else {
      onSearch('');
    }
  };

  return (
    <QASearch
      className="qa-search search-field"
      placeholder="Have a question? Search for answers..."
      onChange={handleChange}
    />
  );
}

const QASearch = styled.input`
  border: 1px solid var(--cafe-noir);
  width: 100%;
  height: 2rem;
  outline: none;
  box-sizing: border-box;
  padding: 1rem;
  margin-bottom: 1rem;
`;
