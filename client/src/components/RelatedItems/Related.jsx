import React, { useState, useEffect, useContext } from 'react';
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaStar,
} from 'react-icons/fa';

import ProductContext from '../Context';

function Related() {
  const { setProductId, joinedAPIDetails } = useContext(ProductContext)
  const referenceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [shownImagesArray, setShownImagesArray] = useState([]);
  const [shownImagesOffset, setShownImagesOffset] = useState(0);
  useEffect(() => {
    setShownImagesArray([0, 1, 2, 3]);
    setShownImagesOffset(0);
  }, [joinedAPIDetails]);

  if (!joinedAPIDetails || joinedAPIDetails.length === 0) {
    return <div>Sorry, no data to display. Please wait.</div>;
  }
  const length = joinedAPIDetails.length;

  const visibleSlide = () => {
    setShownImagesArray(
      referenceArray.slice(shownImagesOffset, shownImagesOffset + 4)
    );
  };

  const nextSlide = () => {
    if (shownImagesOffset < length - 4) {
      setShownImagesOffset((prevState) => prevState + 1);
    }
    visibleSlide();
  };

  const prevSlide = () => {
    if (shownImagesOffset > 0) {
      setShownImagesOffset((prevState) => prevState - 1);
    }
    visibleSlide();
  };

  return (
    <div>
      <section className="ri-slider">
        {shownImagesArray[0] !== 0 ? (
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        ) : null}
        {shownImagesArray[3] < length - 1 ? (
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        ) : null}

        {joinedAPIDetails.map((ea, idx) => (
          <div key={idx}>
            {/* {console.log('Testing', ea.product_id)} */}
            {shownImagesArray.includes(idx) && (
              <div className="ri-container">
                <a href="https://amazon.com">
                  <FaStar className="ri-star" />
                </a>
                <img
                  role="button"
                  className="ri-image"
                  src={ea.results[0].photos[0].thumbnail_url}
                  alt="clothing"
                  key={ea.product_id}
                  onClick={() => setProductId(ea.product_id)}
                  onKeyDown={() => setProductId(ea.product_id)}
                />
                <ul className="bottom-left">
                  <li>Category: {ea.category}</li>
                  <li>Name: {ea.name}</li>
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
