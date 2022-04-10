/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useContext } from 'react';
// import { FaStar } from 'react-icons/fa';
import ProductContext from '../../Context';
import '../style.css';

function ProductCard({ handleModalClick, product, icon }) {
  const { setProductId } = useContext(ProductContext);
  //console.log('ICON ', Icon)

  return (
    <div className="ri-product-card">
      <span className="ri-star" type="button" icon={icon} onClick={() => handleModalClick(product.product_id)}>{icon}</span>



      {/* <FaStar
        onClick={() => handleModalClick(product.product_id)}
        className="ri-star"
      /> */}
      <img
        role="button"
        className="ri-image"
        src={product.results[0] && product.results[0].photos[0].thumbnail_url}
        alt="clothing"
        key={product.product_id}
        onClick={() => setProductId(product.product_id)}
        onKeyDown={() => setProductId(product.product_id)}
      />
    </div>
  );
}
export default ProductCard;
