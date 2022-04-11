import React from 'react';
import { starFillPercentage } from 'Utilities';

function ReviewEntryStar({ rating }) {
  const starsInner = {
    background: `linear-gradient(90deg, var(--dutch-white) ${starFillPercentage(rating)}%, var(--ebony) 0.1%, var(--ebony) ${100 - starFillPercentage(rating)}%)`,
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
