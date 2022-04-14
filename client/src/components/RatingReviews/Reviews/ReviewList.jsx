import React, { useState, useEffect } from 'react';
import ReviewEntry from './ReviewEntry';
import ReviewSearch from './ReviewSearch';
import { StyledButton, StyledSearchBar } from '../Style/RatingReviewStyle';

function ReviewList({ sortedList, sortStarFilter }) {
  const [showMoreReview, setShowMoreReview] = useState(2);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [listLength, setListLength] = useState(sortedList.length);
  const [searchedWord, setSearchWord] = useState('');
  const [filterSearch, setFilterSearch] = useState(/.*/);

  const handleMoreReviewsClick = (event) => {
    event.preventDefault();
    setShowMoreReview(showMoreReview + 2);
  };

  useEffect(() => {
    setFilterSearch(new RegExp(searchedWord, 'i'));
  }, [searchedWord]);

  return (
    <div className="RR-review-list">
      <StyledSearchBar>
      <ReviewSearch searchedWord={searchedWord} setSearchWord={setSearchWord}/>
      </StyledSearchBar>
      <div id='ov-Anchor'></div>
      <h4>Review List </h4>
      {sortedList
        .filter(
          (eachReviewObj) =>
            sortStarFilter === 0 || eachReviewObj.rating === sortStarFilter
        )
        .filter(
          (eachReviewObj) =>
          searchedWord === '' || filterSearch.test(eachReviewObj.body)
        )
        .slice(0, showMoreReview)
        .map((eachReview) => (
          <ReviewEntry key={eachReview.review_id} eachReview={eachReview} />
        ))}
      {showMoreReview < listLength && (
        <StyledButton
          onClick={handleMoreReviewsClick}
        >
          More Reviews
        </StyledButton>
      )}
    </div>
  );
}

export default ReviewList;
