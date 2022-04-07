/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { escapeValue } from 'Utilities';

function Search({ onSearch }) {
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
      className="search-field"
      placeholder="Have a question? Search for answers..."
      onChange={(e) => handleChange(e)}
    />
  );
}

export default Search;
