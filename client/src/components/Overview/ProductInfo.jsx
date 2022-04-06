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
        $
        {styles[0] && styles[0].original_price}
      </p>
      {/* Extract to component */}
      <div className="social-media">
      &emsp;
        <FaFacebook className="Facebook" />
        {' '}
&emsp;
        <CgTwitter className="Twitter" />
&emsp;
        <FaPinterest className="Pinterest" />
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
