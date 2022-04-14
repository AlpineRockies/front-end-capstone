import React from 'react';
import { starFillPercentage } from 'Utilities';

function ReviewEntryStar({ rating }) {
  const starsInner = {
    backgroundImage: `linear-gradient(90deg, var(--artichoke) ${starFillPercentage(rating)}%, var(--dutch-white) 0.1%, var(--dutch-white) ${100 - starFillPercentage(rating)}%)`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <div>
      <span style={starsInner}>
        ★★★★★
      </span>
    </div>
  );
}

export default ReviewEntryStar;
