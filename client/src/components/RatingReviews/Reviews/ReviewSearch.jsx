import React, { useState } from 'react';
import { escapeValue, lowercase } from 'Utilities';

function ReviewSearch({ searchWord, setSearchWord }) {
  const handleSearchQuery = (event) => {
    const query = escapeValue(event.target.value);

    if (query.length > 2) {
      setSearchWord(lowercase(query));
    }
  };

  return (
    <div>
      <input type="text"
      placeholder="Search the reviews"
      onChange={handleSearchQuery}
      />
    </div>
  );
}

export default ReviewSearch;
