import React from 'react';

function ProductInfo({ description }) {
  return (
    <div>
      <p>stars and review</p>
      <p> CATEGORY</p>
      <p>{description.name}</p>
      <p>
        {description.default_price}
        {' '}
      </p>
      <p>
        Social Media Icons
      </p>
    </div>
  );
}

export default ProductInfo;
