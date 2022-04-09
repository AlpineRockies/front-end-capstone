import React from 'react';
import { StarWrapper } from '../Style/RatingReviewStyle';
import _ from 'underscore';
import { starFillPercentage } from 'Utilities';
import { FaStar } from 'react-icons/fa';

function ReviewEntryStar({ rating }) {

  const starsInner = {
    background: `linear-gradient(90deg, var(--dutch-white) ${starFillPercentage(rating)}%, var(--kombu-green) 0.1%, var(--kombu-green) ${100 - starFillPercentage(rating)}%)`,
  };

  return (
    <StarWrapper>
      <span style={starsInner}>
        {_.range(1, 6).map((count) => (
          <FaStar key={count} />
        ))}
      </span>
    </StarWrapper>
  );
}

export default ReviewEntryStar;
