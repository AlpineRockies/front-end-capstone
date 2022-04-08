/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import ProductContext from '../../Context';
import { FaWindowClose } from 'react-icons/fa'
import '../style.css';

function YourOutfitCard({ product, removeItem }) {
  const { setProductId } = useContext(ProductContext);
  return (
    <>
      <div className="yo-item-Close-Button">
        <button type="button" onClick={() => removeItem(product.product_id)}>
          <FaWindowClose />
        </button>
      </div>
      <div>
        <div>
          <img
            className="yo-image"
            src={
              product.results[0] && product.results[0].photos[0].thumbnail_url
            }
            alt="clothing"
            key={product.product_id}
            onClick={() => setProductId(product.product_id)}
            onKeyDown={() => setProductId(product.product_id)}
          />
        </div>
      </div>
    </>
  );
}

export default YourOutfitCard;
