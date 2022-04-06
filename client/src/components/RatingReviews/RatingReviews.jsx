/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';
import WriteReview from './WriteReview';
import Breakdown from './Breakdown';

import ProductContext from '../Context';

function RatingReviews() {
  const { productId } = useContext(ProductContext);

  const [sortView, setSortView] = useState('relevant');
  const [sortedList, setSortedList] = useState(sortedList);
  const [pageUrl, setPageUrl] = useState(1);
  const [countUrl, setCountUrl] = useState(2);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [metaData, setMetaData] = useState(metaData);

  const fetchDataRR = () => {
    const reviewAPI = `reviews?product_id=${productId}&sort=${sortView}&page=${pageUrl}&count=${countUrl}`;
    const metaDataAPI = `reviews/meta?product_id=${productId}`;

    const getReviewAPI = axios.get(reviewAPI);
    const getMetaDataAPI = axios.get(metaDataAPI);

    axios
      .all([getReviewAPI, getMetaDataAPI])
      .then(
        axios.spread((...allData) => {
          setSortedList(allData[0].data.results);
          setMetaData(allData[1].data);
        })
      )
      .catch((err) => {
        console.log('err in RR GET', err);
      });
  };

  useEffect(() => {
    fetchDataRR();
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
  };

  const handleWriteReviewClick = (event) => {
    event.preventDefault();
    setShowWriteReview((value) => !value);
  };

  return (
    <div className="RR-review-list">
      <h2>Rating And Reviews</h2>

      {metaData && <Breakdown metaData={metaData} />}

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

      {sortedList && <ReviewList sortedList={sortedList} />}

      <button
        className="RR-more-reviews-button"
        type="button"
        onClick={handleMoreReviewsClick}
      >
        More Reviews
      </button>

      <div className="RR-write-review">
        <button
          className="RR-write-review-button"
          type="button"
          onClick={handleWriteReviewClick}
        >
          Write Review
        </button>
        {metaData && (
          <WriteReview
            showWriteReview={showWriteReview}
            setShowWriteReview={setShowWriteReview}
            productId={productId}
            metaData={metaData}
          />
        )}
      </div>
    </div>
  );
}

export default RatingReviews;
