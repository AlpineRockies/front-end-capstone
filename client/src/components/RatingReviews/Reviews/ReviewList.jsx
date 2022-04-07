import React, { useState, useEffect, useContext } from 'react';
import ReviewEntry from './ReviewEntry';
import _ from 'underscore';

function ReviewList({ sortedList, sortStarFilter }) {
  return (
    <div className="RR-review-list">
      <h4>Review List </h4>
      {sortedList
        .filter(
          (eachReviewObj) =>
            sortStarFilter === 0 || eachReviewObj.rating === sortStarFilter
        )
        .map((eachReview) => (
          <ReviewEntry key={eachReview.review_id} eachReview={eachReview} />
        ))}
    </div>
  );
}

export default ReviewList;
