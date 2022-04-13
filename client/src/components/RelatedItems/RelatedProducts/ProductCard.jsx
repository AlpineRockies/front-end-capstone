/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import _ from 'underscore';
import '../style.css';

function ProductCard({
  handleClickIcon,
  handleClickImg,
  product,
  icon,
}) {
  const [current, setCurrent] = useState(0);

  const ThumbnailGallery = _.map(product.results, (item, index) => {
    return (
      <div className={index === current ? 'slide active' : 'slide'} key={index}>
        {index === current && (
          <img className="ri-image" src={item.photos[0].thumbnail_url} alt="" />
        )}
      </div>
    );
  });
  const { length } = ThumbnailGallery;

  if (!Array.isArray(ThumbnailGallery) || length <= 0) {
    return null;
  }

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="ri-product-card">
      <span
        role="button"
        tabIndex={0}
        className="ri-star"
        type="button"
        icon={icon}
        onKeyDown={() => handleClickIcon(product.product_id)}
        onClick={() => handleClickIcon(product.product_id)}
      >
        {icon}
      </span>
      <section className="thumbnail-slider">
        <FaAngleLeft
          className="thumbnail-slider-left-arrow"
          onClick={prevImage}
        />
        <div
          role="button"
          tabIndex="0"
          key={product.product_id}
          onClick={() => handleClickImg(product.product_id)}
          onKeyDown={() => handleClickImg(product.product_id)}
        >
          {ThumbnailGallery}
        </div>
        <FaAngleRight
          className="thumbnail-slider-right-arrow"
          onClick={nextImage}
        />
      </section>
      {/* {openThumbnails && ThumbnailHover} */}
    </div>
  );
}
export default ProductCard;
