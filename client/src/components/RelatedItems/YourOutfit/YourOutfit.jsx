/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useContext } from 'react';
import _ from 'underscore';
import { FaPlusSquare } from 'react-icons/fa';
import { StyledFaWindowClose } from '../StyledComponents';

import Carousel from '../Carousel/Carousel';

import ProductContext from '../../Context';

function YourOutfit({ setYourOutfitId }) {
  const { productId, yourOutfit, setYourOutfit } = useContext(ProductContext);

  const removeItem = (product) => {
    const copyYourOutfit = yourOutfit.slice();
    setYourOutfit(copyYourOutfit.filter((item) => item.id !== Number(product)));
  };

  const addYourOutfit = (product) => {
    if (!_.some(yourOutfit, (item) => item.id === +product)) {
      setYourOutfitId(product);
    }
  };
  const handleMouseOver = (product_id) => {
    console.log('handleMouseOver ', product_id)
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('yourOutfit', JSON.stringify(yourOutfit));
  }, [yourOutfit]);

  return (
    <div>
      <section className="yo-slider">
        <div className="yo-container">
          <div className="yo-plusSqure">
            <FaPlusSquare
              className="yo-additem"
              onClick={() => addYourOutfit(productId)}
            />
          </div>
          <h3>Add to Your Outfit!</h3>
        </div>
        <Carousel
          imagesArray={yourOutfit}
          numToDisplay={3}
          handleClickIcon={removeItem}
          handleMouseOver={handleMouseOver}
          icon={<StyledFaWindowClose />}
        />
      </section>
    </div>
  );
}

export default YourOutfit;
