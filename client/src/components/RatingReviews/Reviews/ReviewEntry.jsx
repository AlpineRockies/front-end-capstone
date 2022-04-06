import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReviewPhotos from './ReviewPhotos';
import ReviewEntryStar from './ReviewEntryStar';
import moment from 'moment';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';


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
          console.log('err in RR helpful PUT');
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
    <div className="RR-review-entry">
      <div className="RR-review-photos">
        {eachReview.photos[0] && <ReviewPhotos photos={eachReview.photos} />}
      </div>
      <div className="RR-review-header">
        Rating = {eachReview.rating}
        <p>Summary: {eachReview.summary}</p>
        <p>Date: {moment(eachReview.date).format('MMM Do YY')}</p>
      </div>
      <div className="RR-review-body">
        <p>{eachReview.body}</p>
      </div>
      <div className="RR-review-person-response">
        <p>{eachReview.reviewer_name}</p>
        {eachReview.response && (
          <p>Response from seller:{eachReview.response}</p>
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
            eachReview.helpfulness - 1
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
    </div>
  );
}

export default ReviewEntry;
