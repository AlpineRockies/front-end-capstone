/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx'
//import { ProductIDContext } from '../App.jsx';
import ProductContext from '../Context.jsx';

function RatingReviews() {
  const { productId } = useContext(ProductContext);
  console.log('i am prouct id in RR', productId);

  const [sortView, setSortView] = useState('relevant');
  const [sortedList, setSortedList] = useState([]);
  const [pageUrl, setPageUrl] = useState(1);
  const [countUrl, setCountUrl] = useState(2);
  const [showWriteReview, setShowWriteReview] = useState(false);

  useEffect(() => {
    axios
      .get(`reviews?product_id=${productId}&sort=${sortView}&page=${pageUrl}&count=${countUrl}`)
      .then((results) => {
        setSortedList(results.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortView, countUrl]);

  const handleViewChange = (event) => {
    setSortView(event.target.value);
  };

  const handleViewClick = (event) => {
    event.preventDefault();
  };

  const handleMoreReviewsClick = (event) => {
    event.preventDefault();
    setCountUrl(countUrl + 2);
    console.log(sortedList);
  };

  const handleWriteReviewClick = (event) => {
    event.preventDefault();
    setShowWriteReview((value) => !value);
  };

  return (
    <div className="RR-review-list">
      <h2>Rating And Reviews</h2>

      <form onClick={handleViewClick}>
        <label>
          Sort:
          <select value={sortView} onChange={handleViewChange}>
            <option value="relevant">Relevant</option>
            <option value="newest">Newest</option>
            <option value="helpful">Helpful</option>
          </select>
        </label>
      </form>

      <ReviewList sortedList={sortedList} />

      <button className="RR-more-reviews-button" type="button" onClick={handleMoreReviewsClick}>More Reviews</button>

      <div className="RR-write-review">
        <button className="RR-write-review-button" type="button" onClick={handleWriteReviewClick}>Write Review</button>
        <WriteReview showWriteReview={showWriteReview} setShowWriteReview={setShowWriteReview} />
      </div>

    </div>
  );
}

export default RatingReviews;
