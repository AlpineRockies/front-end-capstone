import React, {
// useState,
// useEffect,
// useContext
} from 'react';
import PropTypes from 'prop-types';

function AddToCart(props) {
  // if (props.styles.results !== undefined) {

  // }
  // eslint-disable-next-line no-unused-vars
  const { styles } = props;

  return (
    <div>
      <select name="size" id="size" className="ov-sizes">
        <option>select a size</option>
        <option value="xs">xs</option>
        <option value="s">s</option>
        <option value="m">m</option>
        <option value="l">l</option>
        <option value="xl">xl</option>
      </select>
      <select name="size" id="size" className="ov-qty">
        <option>qty</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
      <button className="ov-checkoutButton" type="button">add to cart</button>
    </div>
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
