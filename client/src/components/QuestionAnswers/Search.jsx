import React, { useState, useContext } from 'react';
import ProductContext from '../Context';

function Search() {
  const { productId } = useContext(ProductContext);
  const [query, setQuery] = useState(() => '');

  const handleChange = (event) => {
    const newQuery = event.target.value;

    setQuery(newQuery);

    if (newQuery.length > 2) {
      // filter the Q&A list
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
