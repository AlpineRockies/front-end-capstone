/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import ArrowNav from '../RelatedProducts/ArrowNav';
import ProductCard from '../RelatedProducts/ProductCard';
import ProductCardInfo from '../RelatedProducts/ProductCardInfo';

function Carousel({
  imagesArray,
  numToDisplay,
  handleClickIcon,
  handleClickImg,
  icon,
  classNameInfo,
}) {
  const referenceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [shownImagesArray, setShownImagesArray] = useState([]);
  const [shownImagesOffset, setShownImagesOffset] = useState(0);

  useEffect(() => {
    setShownImagesArray(
      referenceArray.slice(shownImagesOffset, shownImagesOffset + numToDisplay),
    );
  }, [shownImagesOffset]);

  useEffect(() => {
    setShownImagesArray(_.range(0, numToDisplay));
    setShownImagesOffset(0);
  }, [imagesArray]);

  if (!imagesArray || imagesArray.length === 0) {
    return null;
  }
  const { length } = imagesArray;

  const nextSlide = () => {
    if (shownImagesOffset < length - numToDisplay) {
      setShownImagesOffset((prevState) => prevState + 1);
    }
  };

  const prevSlide = () => {
    if (shownImagesOffset > 0) {
      setShownImagesOffset((prevState) => prevState - 1);
    }
  };

  const ProductCarousel = imagesArray.map((product, index) => {
    if (shownImagesArray.includes(index)) {
      return (
        <div key={index} className={classNameInfo}>
          <ProductCard
            handleClickImg={handleClickImg}
            product={product}
            handleClickIcon={handleClickIcon}
            icon={icon}
          />
          <ProductCardInfo product={product} />
        </div>
      );
    }
    return null;
  });

  return (
    <>
      <ArrowNav
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        shownImagesArray={shownImagesArray}
        length={length}
      />
      {ProductCarousel}
    </>
  );
}

export default Carousel;
