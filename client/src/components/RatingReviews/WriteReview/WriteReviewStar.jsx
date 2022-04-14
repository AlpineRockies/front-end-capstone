import React, { useState } from 'react';
import _ from 'underscore';
import { FaStar } from 'react-icons/fa';
import { WriteStarWrapper } from '../Style/RatingReviewStyle'

function WriteReviewStar({ handleStar }) {
  const [starWR, setStarWR] = useState(starWR);

  const handleSetStarChange = (event) => {
    setStarWR(event);
    handleStar?.(event);
  };

  const handleStarCharacteristic = (star) => {
    if (star === 1) {
      return 'Poor';
    } else if (star === 2) {
      return 'Fair';
    } else if (star === 3) {
      return 'Average';
    } else if (star === 4) {
      return 'Good';
    } else if (star === 5) {
      return 'Great';
    } else {
      ('');
    }
  };

  return (
    <WriteStarWrapper>
      {_.range(1, 6).map((count) => (
        <label key={count}>
          <FaStar
            value={count}
            color={count <= starWR  ? 'var(--kombu-green)' : 'var(--dutch-white)'}
            onClick={() => handleSetStarChange(count)}
          />
        </label>
      ))}
      <div className="RR-wr-star-characteristic">
        {handleStarCharacteristic(starWR)}
      </div>
    </WriteStarWrapper>
  );
}

export default WriteReviewStar;
