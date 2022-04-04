import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function Related({ relatedItems, handleClick }) {
  const [arr, setArr] = useState([0, 1, 2, 3]);
  const length = relatedItems.length;

  const nextSlide = () => {
    setArr(
      arr[3] !== length - 1
        ? [arr[0] + 1, arr[0] + 2, arr[0] + 3, arr[0] + 4]
        : [length - 4, length - 3, length - 2, length - 1]
    );
  };

  const prevSlide = () => {
    setArr(
      arr[0] === 0
        ? [0, 1, 2, 3]
        : [arr[3] - 4, arr[3] - 3, arr[3] - 2, arr[3] - 1]
    );
  };

  if (!Array.isArray(relatedItems) || length <= 0) {
    return <div>Sorry, no data to display. Please wait.</div>;
  }

  return (
    <div>
      <section className="ri-slider">
        {arr[0] !== 0 ? (
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        ) : null}
        {arr[3] !== length - 1 ? (
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        ) : null}

        {relatedItems.map((ea, idx) => (
          <div key={idx}>
            {/* {console.log('Testing', ea.product_id)} */}
            {arr.includes(idx) && (
              <div className="ri-container">
                <img
                  className="ri-image"
                  src={ea.results[0].photos[0].thumbnail_url}
                  alt="clothing"
                  key={ea.product_id}
                  onClick={() => handleClick(ea.product_id)}
                />
                <ul className="bottom-left">
                  <li>Catergory</li>
                  <li>Product_Description</li>
                  <li>{ea.results[0].original_price}</li>
                  <li>STARS</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Related;
