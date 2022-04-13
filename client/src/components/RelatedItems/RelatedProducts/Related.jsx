/* eslint-disable babel/camelcase */
import React, { useState, useEffect, useContext } from 'react';
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
  const handleClickImg = (product_id, style_id) => {
    //console.log('product_id: ', product_id, 'style_id :', style_id)
    setProductId(product_id);
  };

  const handleClickThumbnailImages = (style_id) => {
    console.log('handleClickThumbnailImages', style_id);
    setOpenThumbnails(false)
  };

  const handleMouseOver = (product_id) => {
    const filter = _.filter(
      joinedAPIDetails,
      (product) => product.id === +product_id
    );
    setThumbnailCarousel(
      _.map(filter[0].results, (item) => {
        //console.log('map item ', item);
        return { product_id: item.style_id, results: [item] };
      })
    );
    setOpenThumbnails(true);
  };

  useEffect(() => {
    // console.log('thumbnailCarousel ', thumbnailCarousel);
    // console.log('joinedAPIDetails ', joinedAPIDetails);
  }, [thumbnailCarousel]);

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
      {openThumbnails && (
        <div className="ri-thumbnail-slider-background">
          <div className="ri-thumbnail-slider">
            <Carousel
              imagesArray={thumbnailCarousel}
              numToDisplay={4}
              handleClickImg={handleClickThumbnailImages}
              handleMouseOver={handleTEST}
              classNameInfo={'ri-thumbnail-slider-img'}
              classNameImg={'ri-thumbnail-hover'}
            />
          </div>
        </div>
      )}
      <p />
      <div className="ri-slider">
        <Carousel
          imagesArray={joinedAPIDetails}
          numToDisplay={4}
          handleClickIcon={handleModalClick}
          handleClickImg={handleClickImg}
          handleMouseOver={() => null}
          icon={<StyledFaStar />}
          classNameInfo={'ri-container'}
          classNameImg={'ri-image'}
        />
      </div>
    </div>
  );
}

export default Related;
