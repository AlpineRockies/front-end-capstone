/* eslint-disable react/prop-types */
import React from 'react';
import { StyledRightArrow, StyledLeftArrow } from '../StyledComponents';

// eslint-disable-next-line object-curly-newline
function ArrowNav({ shownImagesArray, nextSlide, prevSlide, length }) {
  return (
    <>
      {shownImagesArray[0] > 0 ? (
        <StyledLeftArrow onClick={prevSlide} />
      ) : null}
      {shownImagesArray.slice(-1) < length - 1 ? (
        <StyledRightArrow onClick={nextSlide} />
      ) : null}
    </>
  );
}

export default ArrowNav;
