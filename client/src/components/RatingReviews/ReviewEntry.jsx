import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';

function ReviewEntry({ eachReview }) {
  return (
    <div className='RR-review-entry'>
      <div className='RR-review-header'>
        {eachReview.rating}
        <p>Summary: {eachReview.summary}</p>
        <p>Date: {moment(eachReview.date).format("MMM Do YY")}</p>
      </div>
      <div className='RR-review-body'>
        <p>{eachReview.body}</p>
      </div>
      <div className='RR-review-person-response'>
        <p>{eachReview.reviewer_name}</p>
        <p>{eachReview.response}</p>
      </div>
      <div className='RR-helpful'>
        <p>Helpfulness?</p>
        {eachReview.helpfulness}
      </div>
    </div>
  );
}

export default ReviewEntry;