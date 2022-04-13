import React, { useState } from 'react';
import ReviewEntry from './ReviewEntry';
import ReviewSearch from './ReviewSearch';
import { StyledButton } from '../Style/RatingReviewStyle';
import { lowercase } from 'Utilities';

function ReviewList({ sortedList, sortStarFilter }) {
  const [showMoreReview, setShowMoreReview] = useState(2);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [listLength, setListLength] = useState(sortedList.length);
  const [searchedWord, setSearchWord] = useState('');

  const handleMoreReviewsClick = (event) => {
    event.preventDefault();
    setShowMoreReview(showMoreReview + 2);
  };

  const handleSearchList = (eachReviewObjBody) => {
    const reviewBodyArray = lowercase(eachReviewObjBody).replace(/\./i, '').split(' ');
    console.log('filter', reviewBodyArray.filter((reviewBody) => reviewBody === searchedWord))

  }

  return (
    <div className="RR-review-list">
      <ReviewSearch searchedWord={searchedWord} setSearchWord={setSearchWord}/>
      <h4>Review List </h4>
      {sortedList
        .filter(
          (eachReviewObj) =>
            sortStarFilter === 0 || eachReviewObj.rating === sortStarFilter
        )
        .filter(
          (eachReviewObj) =>
          searchedWord === '' || handleSearchList(eachReviewObj.body)
        )
        .slice(0, showMoreReview)
        .map((eachReview) => (
          <ReviewEntry key={eachReview.review_id} eachReview={eachReview} />
        ))}
      {showMoreReview < listLength && (
        <StyledButton
          type="button"
          onClick={handleMoreReviewsClick}
        >
          More Reviews
        </StyledButton>
      )}
    </div>
  );
}

export default ReviewList;
