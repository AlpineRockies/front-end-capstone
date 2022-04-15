/* eslint-disable no-undef */
import React, {
} from 'react';
import { FaFacebook, FaPinterest } from 'react-icons/fa';
import { CgTwitter } from 'react-icons/cg';
import PropTypes from 'prop-types';
import ReviewEntryStar from '../RatingReviews/Reviews/ReviewEntryStar';

function ProductInfo(props) {
  const {
    styles, description, styleSelector, avgRating,
  } = props;
  let price;
  if (styles[styleSelector] && styles[styleSelector].sale_price !== null) {
    price = (
      <span className="ov-price">
        <span style={{ color: 'red' }}>
          $
          {styles[styleSelector].sale_price}
        </span>
        &ensp;
        <span style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
          $
          {styles[styleSelector].original_price}
        </span>
      </span>
    );
  } else {
    price = (
      <span>
        $
        {styles[styleSelector] && styles[styleSelector].original_price}
      </span>
    );
  }
  return (

    <div className="ov-product-info">
      <br />
      {' '}
      <br />
      <div className="ov-Reviews">
        <ReviewEntryStar rating={avgRating} />
      &ensp;
        <a className="ov-read" href="/#ov-Anchor">Read all reviews</a>
      </div>
      <br />
      {description.category && description.category.toUpperCase()}
      <br />
      <div className="ov-product-name">{description && description.name}</div>
      <p>
        {price}
      </p>
      {/* Extract to component */}
      <div className="social-media">
      &emsp;
        <FaFacebook className="Facebook" onClick={() => window.open('https://www.facebook.com', '_black')} />
&emsp;
        <CgTwitter className="Twitter" onClick={() => window.open('https://www.twitter.com', '_black')} />
&emsp;
        <FaPinterest className="Pinterest" onClick={() => window.open('https://www.pinterest.com', '_black')} />
      </div>
      <br />
      {/* End extraction */}
    </div>
  );
}

ProductInfo.propTypes = {
  styles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
  description: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]).isRequired,
  styleSelector: PropTypes.number.isRequired,
  avgRating: PropTypes.number,
};

ProductInfo.defaultProps = {
  styles: [],
  avgRating: 3.8,
};

export default ProductInfo;
