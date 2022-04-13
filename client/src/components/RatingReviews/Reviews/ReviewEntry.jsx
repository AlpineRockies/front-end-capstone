import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
import ReviewPhotos from './ReviewPhotos';
import ReviewEntryStar from './ReviewEntryStar';
import { ReviewWrapper } from '../Style/RatingReviewStyle';

function ReviewEntry({ eachReview }) {
  const [helpfulClick, setHelpfulClick] = useState(false);
  const [notHelpfulClick, setNotHelpfulClick] = useState(false);
  const [reportClick, setReportClick] = useState(false);

  const handleHelpful = (value) => {
    if (value === true) {
      axios
        .put(`/reviews/${eachReview.review_id}/helpful`)
        .then((response) => console.log(response))
        .then(() => setHelpfulClick(true))
        .catch((err) => {
          console.log('err in RR helpful PUT', err);
        });
    } else {
      setNotHelpfulClick(true);
    }
  };

  const handleReport = () => {
    reportClick ||
      axios
        .put(`/reviews/${eachReview.review_id}/report`)
        .then(() => setReportClick(true))
        .catch((err) => {
          console.log('err in RR report PUT');
        });
  };

  return (
    <ReviewWrapper>
      <div className="RR-review-photos">
        {eachReview.photos[0] && <ReviewPhotos photos={eachReview.photos} />}
      </div>
      <div className="RR-review-header">
        <ReviewEntryStar rating={eachReview.rating} />
        <p>
          Date:
          {moment(eachReview.date).format('MMM Do YY')}
        </p>
        <p>
          Summary:
          {eachReview.summary}
        </p>
      </div>
      <div className="RR-review-body">
        <p>{eachReview.body}</p>
      </div>
      <div className="RR-review-person-response">
        <p>{eachReview.reviewer_name}</p>
        {eachReview.response && (
          <p>
            Response from seller:
            {eachReview.response}
          </p>
        )}
      </div>
      <div className="RR-helpful">
        <p>Was this review helpful?</p>
        <label>
          {helpfulClick ? (
            eachReview.helpfulness + 1
          ) : (
            <HiThumbUp onClick={() => handleHelpful(true)} />
          )}
        </label>
        <label>
          {notHelpfulClick ? (
            - 1
          ) : (
            <HiThumbDown onClick={() => handleHelpful(false)} />
          )}
        </label>
      </div>
      <br />
      <div className="RR-report">
        <span
          onClick={handleReport}
          role="button"
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          {reportClick ? 'Reported' : 'Report'}
        </span>
      </div>
    </ReviewWrapper>
  );
}

export default ReviewEntry;
