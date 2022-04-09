/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useContext } from 'react';
import _ from 'underscore';
import { FaPlusSquare } from 'react-icons/fa';
import ArrowNav from '../RelatedProducts/ArrowNav';
import YourOutfitCard from './YourOutfitCard';
import YourOutfitCardInfo from './YourOutfitCardInfo';

import ProductContext from '../../Context';

function YourOutfit({ setYourOutfitId }) {
  const { productId, yourOutfit, setYourOutfit } = useContext(ProductContext);

  const referenceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [shownImagesArray, setShownImagesArray] = useState([0, 1, 2]);
  const [shownImagesOffset, setShownImagesOffset] = useState(0);

  const removeItem = (product) => {
    const copyYourOutfit = yourOutfit.slice();
    setYourOutfit(copyYourOutfit.filter((item) => item.id !== Number(product)));
  };

  const addYourOutfit = (product) => {
    if (!_.some(yourOutfit, (item) => item.id === +product)) {
      setYourOutfitId(product);
    }
  };

  const visibleSlide = () => {
    setShownImagesArray(
      referenceArray.slice(shownImagesOffset, shownImagesOffset + 3),
    );
  };

  const nextSlide = () => {
    if (shownImagesOffset < yourOutfit.length - 3) {
      setShownImagesOffset((prevState) => prevState + 1);
    }
    visibleSlide();
  };

  const prevSlide = () => {
    if (shownImagesOffset > 0) {
      setShownImagesOffset((prevState) => prevState - 1);
    }
    visibleSlide();
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('yourOutfit', JSON.stringify(yourOutfit));
  }, [yourOutfit]);

  const YourOutfitCarousel = yourOutfit.length
    ? yourOutfit.map((product, index) => {
      if (shownImagesArray.includes(index)) {
        return (
          <div key={product.id} className="yo-container">
            <YourOutfitCard product={product} removeItem={removeItem} />
            <YourOutfitCardInfo product={product} />
          </div>
        );
      }
      return null;
    })
    : null;

  return (
    <div>
      <section className="yo-slider">
        <ArrowNav
          shownImagesArray={shownImagesArray}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          length={yourOutfit.length}
        />
        <div className="yo-container">
          <div className="yo-plusSqure">
            <FaPlusSquare
              className="yo-additem"
              onClick={() => addYourOutfit(productId)}
            />
          </div>
          <h3>Add to Your Outfit!</h3>
        </div>
        {YourOutfitCarousel}
      </section>
    </div>
  );
}

export default YourOutfit;
