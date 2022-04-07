/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useContext } from 'react';
import _ from 'underscore';
import { FaPlusSquare } from 'react-icons/fa';

import ProductContext from '../../Context';

function YourOutfit({ setYourOutfitId }) {
  const { productId, yourOutfit, setYourOutfit, setProductId } =
    useContext(ProductContext);

  const removeItem = (product) => {
    const copyYourOutfit = yourOutfit.slice();
    setYourOutfit(copyYourOutfit.filter((item) => item.id !== Number(product)));
  };

  const addYourOutfit = (product) => {
    if (!_.some(yourOutfit, (item) => item.id === +product)) {
      setYourOutfitId(product);
    }
  };


  useEffect(() => {
    localStorage.setItem('yourOutfit', JSON.stringify(yourOutfit))
  }, [yourOutfit])

  return (
    <div>
      <section className="yo-slider">
        <div className="yo-button-container">
          <FaPlusSquare
            className="yo-additem"
            onClick={() => addYourOutfit(productId)}
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
                    src={product.results[0] && product.results[0].photos[0].thumbnail_url}
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
