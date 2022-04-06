import React, { useState } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

function ReviewEntryStar({ rating }) {
  const [inputStar, setInputStar] = useState(rating);

  const stars = Array(5).fill(0);

  return (
    <div>
      {stars.map((star, count) => (
        <FaStar key={count} color={inputStar > count ? 'green' : 'grey'} />
      ))}
    </div>
  );
}

export default ReviewEntryStar;
