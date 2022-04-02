import React, { Component } from 'react';
import Items from './Items.jsx';

function Related({ relatedItems, handleClick }) {

  if (relatedItems && relatedItems.length !== 0) {
    return (
      <div>
        {relatedItems.map((item) => (
          <Items
            key={item.product_id}
            className="ri_eachitem"
            url={item.results[0].photos[0].thumbnail_url}
            name={item.results[0].name}
            id={item.product_id}
            original_price={item.results[0].original_price}
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  }
  return <p>Please Wait</p>;
}

export default Related;
