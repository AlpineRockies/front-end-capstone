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
  handleMouseOver,
  handleMouseOut,
  icon,
}) {
  const referenceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [shownImagesArray, setShownImagesArray] = useState([]);
  const [shownImagesOffset, setShownImagesOffset] = useState(0);

  useEffect(() => {
    setShownImagesArray(_.range(0, numToDisplay));
    setShownImagesOffset(0);
  }, [imagesArray]);

  if (!imagesArray || imagesArray.length === 0) {
    return <div>Sorry, no data to display. Please wait.</div>;
  }

  const { length } = imagesArray;

  const visibleSlide = () => {
    setShownImagesArray(
      referenceArray.slice(shownImagesOffset, shownImagesOffset + numToDisplay),
    );
  };

  const nextSlide = () => {
    if (shownImagesOffset < length - numToDisplay) {
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

  const ProductCarousel = imagesArray.map((product, index) => {
    if (shownImagesArray.includes(index)) {
      return (
        <div className="ri-container">
          <ProductCard
            handleClickImg={handleClickImg}
            product={product}
            handleClick={handleClickIcon}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
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
