/* eslint-disable react/prop-types */
import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


function ArrowNav({ shownImagesArray, nextSlide, prevSlide, length }) {
  return (
    <>
      {shownImagesArray[0] !== 0 ? (
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      ) : null}
      {shownImagesArray[3] < length - 1 ? (
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      ) : null}
    </>
  );
}

export default ArrowNav;
