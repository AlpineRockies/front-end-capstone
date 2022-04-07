import React, { useState, useEffect, useContext } from 'react';
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaStar,
} from 'react-icons/fa';
import ComparisonModal from './ComparisonModal';
import ReviewEntryStar from '../RatingReviews/Reviews/ReviewEntryStar'

import ProductContext from '../Context';

function Related() {
  const { setProductId, joinedAPIDetails } = useContext(ProductContext);
  const referenceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [shownImagesArray, setShownImagesArray] = useState([]);
  const [shownImagesOffset, setShownImagesOffset] = useState(0);
  const [selectedComparisonItem, setSelectedComparisonItem] = useState();
  const [openModal, setOpenModal] = useState(false);

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

  const handleModalClick = (e) => {
    setOpenModal(!openModal);
    setSelectedComparisonItem(e);
  };

  console.log('JOINEDAPIDETAILS: ', joinedAPIDetails)

  return (
    <div>
      <div>
        {openModal && (
          <ComparisonModal
            setOpenModal={setOpenModal}
            selectedComparisonItem={selectedComparisonItem}
          />
        )}
      </div>
      <section className="ri-slider">
        {shownImagesArray[0] !== 0 ? (
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        ) : null}
        {shownImagesArray[3] < length - 1 ? (
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        ) : null}

        {joinedAPIDetails.map((ea, idx) => (
          <div key={idx}>
            {shownImagesArray.includes(idx) && (
              <div className="ri-container">
                <FaStar
                  onClick={() => handleModalClick(ea.product_id)}
                  className="ri-star"
                />
                <img
                  role="button"
                  className="ri-image"
                  src={ea.results[0] && ea.results[0].photos[0].thumbnail_url}
                  alt="clothing"
                  key={ea.product_id}
                  onClick={() => setProductId(ea.product_id)}
                  onKeyDown={() => setProductId(ea.product_id)}
                />
                <ul className="bottom-left">
                  <li>
                    Category:
                    {ea.category}
                  </li>
                  <li>
                    Name:
                    {ea.name}
                  </li>
                  {ea.results[0].sale_price ? (
                    <>
                      <li style={{ textDecorationLine: 'line-through' }}>
                        {ea.results[0].original_price}
                      </li>
                      <li style={{ color: 'red', font_size: '1.2rem' }}>
                        <span>OnSale!! </span>
                        {ea.results[0].sale_price}
                      </li>
                    </>
                  ) : (
                    <li>{ea.results[0].original_price}</li>
                  )}
                  <li><ReviewEntryStar rating={ea.aveRating} /></li>
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
