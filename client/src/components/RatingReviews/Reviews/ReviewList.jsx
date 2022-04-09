import React, { useState } from 'react';
import ReviewEntry from './ReviewEntry';

function ReviewList({ sortedList, sortStarFilter }) {
  const [showMoreReview, setShowMoreReview] = useState(2);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [listLength, setListLength] = useState(sortedList.length);

  const handleMoreReviewsClick = (event) => {
    event.preventDefault();
    setShowMoreReview(showMoreReview + 2);
  };

  return (
    <div className="RR-review-list">
      <h4>Review List </h4>
      {sortedList
        .filter(
          (eachReviewObj) =>
            sortStarFilter === 0 || eachReviewObj.rating === sortStarFilter
        )
        .slice(0, showMoreReview)
        .map((eachReview) => (
          <ReviewEntry key={eachReview.review_id} eachReview={eachReview} />
        ))}
      {showMoreReview < listLength && (
        <button
          className="RR-more-reviews-button"
          type="button"
          onClick={handleMoreReviewsClick}
        >
          More Reviews
        </button>
      )}
    </div>
  );
}

export default ReviewList;
