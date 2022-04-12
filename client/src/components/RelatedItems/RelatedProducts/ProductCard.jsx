/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import ProductContext from '../../Context';
import '../style.css';

function ProductCard({ handleClickIcon, handleClickImg, handleMouseOver, handleMouseOut, product, icon }) {
  const { setProductId } = useContext(ProductContext);

  return (
    <div className="ri-product-card">
      <span
        role="button"
        tabIndex={0}
        className="ri-star"
        type="button"
        icon={icon}
        onKeyDown={() => handleClickIcon(product.product_id)}
        onClick={() => handleClickIcon(product.product_id)}
      >
        {icon}
      </span>
      <div
        role="button"
        tabIndex="0"
        key={product.product_id}
        onClick={() => handleClickImg(product.product_id, product.style_id)}
        onKeyDown={() => handleClickImg(product.product_id)}
        onMouseOver={() => handleMouseOver(product.product_id || product.style_id)}
        onFocus={() => handleMouseOver(product.product_id)}
        // onMouseOut={handleMouseOut}
        // onBlur={handleMouseOut}
      >
        <img
          className="ri-image"
          src={product.results[0] && product.results[0].photos[0].thumbnail_url}
          alt="clothing"
        />
      </div>
    </div>
  );
}
export default ProductCard;
