import React, { useState, useEffect, useContext } from 'react';
import ReviewEntry from './ReviewEntry.jsx';

function ReviewList({ sortedList }) {
  return (
    <div className='RR-review-list'>
      <h4>Review List </h4>
      {sortedList.map((eachReview) => (
        <ReviewEntry key={eachReview.review_id} eachReview={eachReview} />
      ))}
    </div>
  );
}

export default ReviewList;
