import React, { useState, useEffect, useContext } from 'react';
import ComparisonModal from '../Modal/ComparisonModal';
import ProductCard from './ProductCard';
import ProductCardInfo from './ProductCardInfo';
import ArrowNav from './ArrowNav';
import '../style.css';

import ProductContext from '../../Context';

function Related() {
  const { joinedAPIDetails } = useContext(ProductContext);
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
  // eslint-disable-next-line prefer-destructuring
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

  const handleModalClick = (compareProduct) => {
    setOpenModal(!openModal);
    setSelectedComparisonItem(compareProduct);
  };

  const ProductCarousel = joinedAPIDetails.map((product, index) => (
    <div key={product.id}>
      {shownImagesArray.includes(index) && (
        <div className="ri-container">
          <ProductCard handleModalClick={handleModalClick} product={product} />
          <ProductCardInfo product={product} />
        </div>
      )}
    </div>
  ));

  console.log('JOINEDAPIDETAILS: ', joinedAPIDetails);

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
        <ArrowNav
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          shownImagesArray={shownImagesArray}
          length={length}
          // productArray={joinedAPIDetails}
          // setShownImagesArray={setShownImagesArray}
        />
        {ProductCarousel}
      </section>
    </div>
  );
}

export default Related;
