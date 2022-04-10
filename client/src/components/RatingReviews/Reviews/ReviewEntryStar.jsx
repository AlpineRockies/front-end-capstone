import React from 'react';
import { StarWrapper } from '../Style/RatingReviewStyle';
import _ from 'underscore';
import { starFillPercentage } from 'Utilities';
import { FaStar } from 'react-icons/fa';

function ReviewEntryStar({ rating }) {

  const starsInner = {
    background: `linear-gradient(90deg, var(--dutch-white) ${starFillPercentage(rating)}%, var(--ebony) 0.1%, var(--ebony) ${100 - starFillPercentage(rating)}%)`,
  };

  return (
    <StarWrapper>
      <span style={starsInner}>
        {_.range(1, 6).map((count) => (
          <FaStar
          opacity='0.5'

          key={count} />
        ))}
      </span>
    </StarWrapper>
  );
}

export default ReviewEntryStar;
