import React, { useState } from 'react';
import _ from 'underscore';
import { starFillPercentage } from 'Utilities';
import { FaStar, FaStarHalf } from 'react-icons/fa';

function ReviewEntryStar({ rating }) {
  const starsInner = {
    background: `linear-gradient(90deg, green ${starFillPercentage(rating)}%, grey 0.1%, grey ${100 - starFillPercentage(rating)}%)`,
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
