import React, { useContext } from 'react';
import {
  FaPlusSquare,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from 'react-icons/fa';

import ProductContext from '../Context';

function YourOutfit({ setYourOutfitId }) {
  const { productId, yourOutfit, setProductId } = useContext(ProductContext);

  return (
    <div>
      <section className="yo-slider">
        <div className="yo-button-container">
          <FaPlusSquare
            className="yo-additem"
            onClick={() => setYourOutfitId(productId)}
          />
          <h3>Add to Your Outfit!</h3>
        </div>
        {yourOutfit.length > 0 &&
          yourOutfit.map((product, index) => (
            <div key={index}>
              <div className="yo-container">
                <img
                  className="yo-image"
                  src={product.results[0].photos[0].thumbnail_url}
                  alt="clothing"
                  key={product.product_id}
                  onClick={() => setProductId(product.product_id)}
                  onKeyDown={() => setProductId(product.product_id)}
                />
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}

export default YourOutfit;
