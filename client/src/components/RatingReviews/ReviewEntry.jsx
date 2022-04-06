import React, { useState, useEffect, useContext } from 'react';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
import moment from 'moment';
import ReviewEntryPhoto from './ReviewEntryPhoto';

function ReviewEntry({ eachReview }) {

  const handleClickHelpful = () => {};

  const handleClickReport = () => {};

  return (
    <div className="RR-review-entry">
      <div className="RR-review-photos">
        {eachReview.photos[0] && <ReviewEntryPhoto photos={eachReview.photos}/> }
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
        <p>{eachReview.response}</p>
      </div>
      <div className="RR-helpful">
        <p>Helpfulness? {eachReview.helpfulness} </p>
      </div>
    </div>
  );
}

export default ReviewEntry;
