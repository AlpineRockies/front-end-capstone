import React, { useState } from 'react';
import _ from 'underscore';
import { starFillPercentage } from 'Utilities';
import { FaStar, FaStarHalf } from 'react-icons/fa';

function ReviewEntryStar({ rating }) {
  const starsInner = {
    background: `linear-gradient(100deg, #ff0000 ${starFillPercentage(rating)}%, #0000ff ${100 - starFillPercentage(rating)}%)`,
  };

  return (
    <div>
      <span style={starsInner}>
        {_.range(1, 6).map((count) => (
          <FaStar key={count} />
        ))}
      </span>
    </div>
  );
}

export default ReviewEntryStar;
