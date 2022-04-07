import React, { useState } from 'react';
import { starFillPercentage } from 'Utilities';
import { FaStar, FaStarHalf } from 'react-icons/fa';

function ReviewEntryStar({ rating }) {
  const [inputStar, setInputStar] = useState(rating);

  // console.log(starFillPercentage(rating));

  return (
    <div>
      {([...Array(5)]).map((star, count) => (
        <FaStar key={count} color={inputStar > count ? 'green' : 'grey'} />
      ))}
    </div>
  );
}

export default ReviewEntryStar;
