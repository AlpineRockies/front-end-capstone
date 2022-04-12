/* eslint-disable react/prop-types */
import React from 'react';
import ReviewEntryStar from '../../RatingReviews/Reviews/ReviewEntryStar';
import '../style.css';

function ProductCardInfo({ product }) {
  return (
    <ul className="bottom-left">
        {product.category && <li>Category: {product.category}</li>}
        {product.name && <li>Name: {product.name}</li>}
      {product.results[0].sale_price && product.category ? (
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
        <>{product.category && <li>product.results[0].original_price </li> }</>
      )}
      {product.aveRating && <li className="ri-stars"><ReviewEntryStar rating={product.aveRating} /></li>}
      {/* <li>

      </li> */}
    </ul>
  );
}
export default ProductCardInfo;
