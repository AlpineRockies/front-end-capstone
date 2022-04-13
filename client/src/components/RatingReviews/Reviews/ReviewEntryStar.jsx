import React from 'react';
import { starFillPercentage } from 'Utilities';

function ReviewEntryStar({ rating }) {

  const starsInner = {
<<<<<<< HEAD
    backgroundImage: `linear-gradient(90deg, var(--ebony) ${starFillPercentage(rating)}%, var(--dutch-white) 0.1%, var(--dutch-white) ${100 - starFillPercentage(rating)}%)`,
=======
>>>>>>> 22404a98d908f1ced3693dad67dd1b3371aa5e8c
    backgroundClip: 'text',
    backgroundImage: `linear-gradient(90deg, var(--dutch-white) ${starFillPercentage(rating)}%, var(--ebony) 0.1%, var(--ebony) ${100 - starFillPercentage(rating)}%)`,
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
