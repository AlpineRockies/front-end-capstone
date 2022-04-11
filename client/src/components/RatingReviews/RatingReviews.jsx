/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReviewList from './Reviews/ReviewList';
import WriteReview from './WriteReview/WriteReview';
import Breakdown from './Breakdown/Breakdown';
import ProductContext from '../Context';
import {
  LeftContainer,
  RightContainer,
  MainRRContent,
  Select,
  StyledButton,
} from './Style/RatingReviewStyle';

function RatingReviews() {
  const { productId } = useContext(ProductContext);
  const [sortView, setSortView] = useState('relevant');
  const [sortedList, setSortedList] = useState(null);
  const [sortStarFilter, setSortStarFilter] = useState(0);
  const [pageUrl, setPageUrl] = useState(1);
  const [countUrl, setCountUrl] = useState(100);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [metaData, setMetaData] = useState(null);

  const fetchDataRR = () => {
    const reviewAPI = `reviews?product_id=${productId}&sort=${sortView}&page=${pageUrl}&count=${countUrl}`;
    const metaDataAPI = `reviews/meta?product_id=${productId}`;

    const getReviewAPI = axios.get(reviewAPI);
    const getMetaDataAPI = axios.get(metaDataAPI);

    axios
      .all([getReviewAPI, getMetaDataAPI])
      .then(
        axios.spread((...allData) => {
          setSortedList(allData[0].data.results), setMetaData(allData[1].data);
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

  const handleStarReviewClick = (event) => {
    setSortStarFilter(event);
  };

  return (
    <MainRRContent>
      <h2>Rating And Reviews</h2>
      <LeftContainer>
        <div className="RR-breakdown">
          {metaData && (
            <Breakdown
              metaData={metaData}
              handleStarReviewClick={handleStarReviewClick}
            />
          )}
        </div>
      </LeftContainer>

      <RightContainer>
        <div className="RR-reviews">
          <form onClick={handleViewClick}>
            <label>
              Sort:
              <Select value={sortView} onChange={handleViewChange}>
                <option value="relevant">Relevant</option>
                <option value="newest">Newest</option>
                <option value="helpful">Helpful</option>
              </Select>
            </label>
          </form>
          {sortedList && (
            <ReviewList
              sortedList={sortedList}
              sortStarFilter={sortStarFilter}
            />
          )}
        </div>

        <div className="RR-write-review">
          <StyledButton type="button" onClick={() => setShowWriteReview(true)}>
            Write Review
          </StyledButton>
          {metaData && (
            <WriteReview
              showWriteReview={showWriteReview}
              setShowWriteReview={setShowWriteReview}
              productId={productId}
              metaData={metaData}
            />
          )}
        </div>
      </RightContainer>
    </MainRRContent>
  );
}

export default RatingReviews;
