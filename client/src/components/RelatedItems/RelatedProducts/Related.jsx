/* eslint-disable babel/camelcase */
import React, { useState, useContext } from 'react';
import _ from 'underscore';
import { createPortal } from 'react-dom';
import { StyledFaStar } from '../StyledComponents';
import ComparisonModal from '../Modal/ComparisonModal';
import Carousel from '../Carousel/Carousel';
import '../style.css';

import ProductContext from '../../Context';

function Related() {
  const { joinedAPIDetails, setProductId } = useContext(ProductContext);
  const [selectedComparisonItem, setSelectedComparisonItem] = useState();
  const [openModal, setOpenModal] = useState(false);

  const handleModalClick = (compareProduct) => {
    setOpenModal(!openModal);
    setSelectedComparisonItem(compareProduct);
  };

  // eslint-disable-next-line babel/camelcase
  const handleClickImg = (product_id) => {
    setProductId(product_id);
  };

  return (
    <div>
      {openModal &&
        createPortal(
          <div
            className={
              openModal ? 'ri-modal-Background active' : 'ri-modal-Background'
            }
          >
            <ComparisonModal
              closeTimeoutMS={1000}
              openModal={openModal}
              setOpenModal={setOpenModal}
              selectedComparisonItem={selectedComparisonItem}
            />
          </div>,
          document.getElementById('portal'),
        )}
      <p />
      <div className="ri-slider">
        <Carousel
          imagesArray={joinedAPIDetails}
          numToDisplay={4}
          handleClickIcon={handleModalClick}
          handleClickImg={handleClickImg}
          icon={<StyledFaStar />}
          classNameInfo={'ri-container'}
        />
      </div>
    </div>
  );
}

export default Related;
