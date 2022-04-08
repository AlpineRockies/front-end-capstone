import React, { useState } from 'react';
import ReviewEntry from './ReviewEntry';

function ReviewList({ sortedList, sortStarFilter }) {
  const [showMoreReview, setShowMoreReview] = useState(2);

  const handleMoreReviewsClick = (event) => {
    event.preventDefault();
    setShowMoreReview(showMoreReview + 2);
  };

  return (
    <div className="RR-review-list">
      <h4>Review List </h4>
      {sortedList
        .slice(0, showMoreReview)
        .filter(
          (eachReviewObj) =>
            sortStarFilter === 0 || eachReviewObj.rating === sortStarFilter
        )
        .map((eachReview) => (
          <ReviewEntry key={eachReview.review_id} eachReview={eachReview} />
        ))}
      <button
        className="RR-more-reviews-button"
        type="button"
        onClick={handleMoreReviewsClick}
      >
        More Reviews
      </button>
    </div>
  );
}

export default ReviewList;
