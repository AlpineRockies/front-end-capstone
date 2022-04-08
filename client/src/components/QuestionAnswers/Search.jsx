/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { escapeValue } from 'Utilities';

function Search({ onSearch }) {
  const searchStyle = {
    border: '1px solid gray',
    width: '100%',
    height: '2em',
    outline: 'none',
    boxSizing: 'border-box',
    paddingLeft: '1em',
    marginBottom: '1em',
    /* background-color: #f5f5f5; /* some kinda gray */
  };

  const handleChange = (event) => {
    const newQuery = escapeValue(event.target.value);

    if (newQuery.length > 2) {
      onSearch(newQuery);
    } else {
      onSearch('');
    }
  };

  return (
    <input
      className="qa-search search-field"
      style={searchStyle}
      placeholder="Have a question? Search for answers..."
      onChange={handleChange}
    />
  );
}

export default Search;
