/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React, {
// useState,
// useEffect,
// useContext
} from 'react';
import { FaFacebook, FaPinterest } from 'react-icons/fa';
import { CgTwitter } from 'react-icons/cg';
import PropTypes from 'prop-types';

function ProductInfo(props) {
  const { styles, description } = props;
  let price;
  if (styles[0] && styles[0].sale_price !== null) {
    price = (
      <span className="ov-price">
        <p style={{ color: 'red' }}>
          $
          {styles[0].sale_price}
        </p>
        &ensp;
        <p style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
          $
          {styles[0].original_price}
        </p>
      </span>
    );
  } else {
    price = (
      <span>
        <p>
          $
          {styles[0] && styles[0].original_price}
        </p>
      </span>
    );
  }
  return (
    <div className="ov-product-info">
      {/* Extract to component */}
      <span className="ov-review-stars">
        ✭ ✩ ✩ ✩ ✩
      </span>
      &ensp;
      <span className="ov-review-link">
        <a href="#">Read all reviews</a>
      </span>
      {/* End Extraction */}
      <br />
      <br />
      <br />
      {/* Change to Uppercase */}
      {description.category && description.category.toUpperCase()}
      {/* <h1>{description && description.name}</h1> */}
      <br />
      <br />
      <br />
      <div className="ov-product-name">Expanded Product Name</div>
      <br />
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
};

ProductInfo.defaultProps = {
  styles: [],
};

export default ProductInfo;
