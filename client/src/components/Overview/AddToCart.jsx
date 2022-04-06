import React, {
// useState,
// useEffect,
// useContext
} from 'react';
// import Select from 'react-select';
import PropTypes from 'prop-types';

function AddToCart(props) {
  const { styles } = props;
  for (const [key, value] of Object.entries(styles[0] && styles[0].skus)) {
    console.log(`value: ${value}`);
  return (
    <>
      <span>
        <select className="ov-style-sizes">
          <option value="Select a size">
            SELECT A SIZE
          </option>
        </select>
        {' '}
        <select className="ov-style-qty">
          <option value="1">
            1
          </option>
        </select>
      </span>
      <br />
      <br />
      <button className="ov-checkout-button" type="button">
        ADD TO CART  &emsp; &emsp; &emsp; &emsp; &ensp; ➕
      </button>
    </>
  );
}

AddToCart.propTypes = {
  styles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
};

AddToCart.defaultProps = {
  styles: [],
};

export default AddToCart;
