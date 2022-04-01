import React, { useState } from "react";

function WriteReview({ showWriteReview, setShowWriteReview }) {
  const [reviewInputData, setReviewInputData] = useState([]);

  const handleReivewInput = (event) => {
    console.log('in onchange write', event.target.value);
  }

  const handleReviewInputSubmit = (event) => {
    event.preventDefault();
    console.log('hit in handle submit')
  }

  return (
    <div className="RR-write-review-form">
      {showWriteReview ? (
        <form>
          <div className="RR-write-review-content">
            <div>
              <input placeholder="Name" type="text" onChange={(event) => handleReivewInput(event)} />
            </div>
            <div>
              <input placeholder="Email" type="text" onChange={(event) => handleReivewInput(event)} />
            </div>
            <div>
              <input placeholder="Summary" type="text" onChange={(event) => handleReivewInput(event)} />
            </div>
            <div>
              <input placeholder="Review" type="text" onChange={(event) => handleReivewInput(event)} />
            </div>
          </div>
          <button className="RR-write-review-submit" onClick={handleReviewInputSubmit}>Submit Review</button>
        </form>
      ) : null}
    </div>
  );
}

export default WriteReview;
