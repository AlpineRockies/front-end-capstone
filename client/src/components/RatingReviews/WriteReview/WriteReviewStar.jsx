import React, { useState } from 'react';
import _ from 'underscore';
import { FaStar } from 'react-icons/fa';

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
    <div className="RR-wrs-star">
      {_.range(1, 6).map((count) => (
        <label key={count}>
          <FaStar
            value={count}
            color={count <= starWR  ? "#939878ff" : "#d8cba7ff"}

            onClick={() => handleSetStarChange(count)}
          />
        </label>
      ))}
      <div className="RR-wr-star-characteristic">
        {handleStarCharacteristic(starWR)}
      </div>
    </div>
  );
}

export default WriteReviewStar;
