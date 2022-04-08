/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, {
  useState,
  useEffect,
  // useContext
} from 'react';
// import Select from 'react-select';
import _ from 'underscore';
import PropTypes from 'prop-types';

function AddToCart(props) {
  const {
    styles, count, resultCount, setResultCount, styleSelector
  } = props;

  const [quantityOptions, setQuantityOptions] = useState([]);
  const [sizeSelection, setSizeSelection] = useState(null);

  const handleSizeChange = (e) => {
    const sku = e.target.value;

    setSizeSelection(sku);
  };

  useEffect(() => {
    if (!styles || !styles[styleSelector]) {
      return;
    }

    const quantity = Math.min(styles[styleSelector].skus[sizeSelection].quantity, 15);

    setQuantityOptions(
      _.range(quantity + 1).map((amount) => (
        <option key={amount} value={amount}>{amount}</option>
      ))
    );
  }, [sizeSelection]);

  return (
    <>
      <span>
        <select className="ov-style-sizes" onChange={(e) => handleSizeChange(e)}>
          {styles && styles[count] && Object.entries(styles[styleSelector].skus).map(([sku, { quantity, size }]) => (<option key={sku} value={sku}>{size}</option>))}
        </select>
        {' '}
        <select className="ov-style-qty">
          {quantityOptions}
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
