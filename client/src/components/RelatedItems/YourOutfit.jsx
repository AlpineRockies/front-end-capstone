/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import {
  FaPlusSquare,
} from 'react-icons/fa';

import ProductContext from '../Context';

function YourOutfit({ setYourOutfitId }) {
  const { productId, yourOutfit, setYourOutfit, setProductId } =
    useContext(ProductContext);

  const removeItem = (product) => {
    const copyYourOutfit = yourOutfit.slice();
    setYourOutfit(copyYourOutfit.filter((item) => item.id !== Number(product)));
  };

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
            <div key={index} className="yo-container">
              <div className="yo-item-Close-Button">
                <button
                  type="button"
                  onClick={() => removeItem(product.product_id)}
                >
                  X
                </button>
              </div>
              <div>
                <div>
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
            </div>
          ))}
      </section>
    </div>
  );
}

export default YourOutfit;
