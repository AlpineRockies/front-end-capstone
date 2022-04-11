/* eslint-disable babel/camelcase */
import React, { useState, useContext } from 'react';
import _ from 'underscore';
import { StyledFaStar } from '../StyledComponents';
import ComparisonModal from '../Modal/ComparisonModal';
import Carousel from '../Carousel/Carousel';
import '../style.css';

import ProductContext from '../../Context';

function Related() {
  const { joinedAPIDetails, setProductId } = useContext(ProductContext);
  const [selectedComparisonItem, setSelectedComparisonItem] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openThumbnails, setOpenThumbnails] = useState(false);
  const [thumbnailCarousel, setThumbnailCarousel] = useState([]);

  const handleModalClick = (compareProduct) => {
    setOpenModal(!openModal);
    setSelectedComparisonItem(compareProduct);
  };

  // eslint-disable-next-line babel/camelcase
  const handleClickImg = (product_id) => {
    setProductId(product_id);
  };

  const handleMouseOver = (product_id) => {
    const filter = _.filter(joinedAPIDetails, (product) => product.id === +product_id);
    setThumbnailCarousel(
      _.map(filter[0].results, (item) => item),
    );

    setOpenThumbnails(true);
  };


  const handleMouseOut = () => {
    setOpenThumbnails(false);
  };

  const ThumbnailCarousel = thumbnailCarousel.map((item, index) => {
    if (item) {
      return (
        <div key={index}>
          <img
            className="ri-thumbnail-carousel"
            src={item.photos[0].thumbnail_url}
            alt={item}
            onClick={() => setOpenThumbnails(false)}
          />
        </div>
      );
    }
    return null;
  });

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
      <div>{openThumbnails && ThumbnailCarousel}</div>
      <div className="ri-slider">
        <Carousel
          imagesArray={joinedAPIDetails}
          numToDisplay={4}
          handleClickIcon={handleModalClick}
          handleClickImg={handleClickImg}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
          icon={<StyledFaStar />}
        />
      </div>
    </div>
  );
}

export default Related;
