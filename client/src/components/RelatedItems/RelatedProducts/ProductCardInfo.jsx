/* eslint-disable react/prop-types */
import React from 'react';
import ReviewEntryStar from '../../RatingReviews/Reviews/ReviewEntryStar';
import '../style.css'

function ProductCardInfo({ product }) {
  return (
    <ul className="bottom-left">
      <li>
        Category:
        {product.category}
      </li>
      <li>
        Name:
        {product.name}
      </li>
      {product.results[0].sale_price ? (
        <>
          <li style={{ textDecorationLine: 'line-through' }}>
            {product.results[0].original_price}
          </li>
          <li style={{ color: 'red', font_size: '1.2rem' }}>
            <span>OnSale!! </span>
            {product.results[0].sale_price}
          </li>
        </>
      ) : (
        <li>{product.results[0].original_price}</li>
      )}
      <li>
        <ReviewEntryStar rating={product.aveRating} />
      </li>
    </ul>
  );
}
export default ProductCardInfo;
