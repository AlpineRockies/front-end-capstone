/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, {
  useState,
  useEffect,
} from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import axios from 'axios';

function AddToCart(props) {
  const {
    styles, count, styleSelector,
  } = props;

  const [quantityOptions, setQuantityOptions] = useState([]);
  const [sizeSelection, setSizeSelection] = useState(null);
  const [quantity, setQuantity] = useState(16);

  const handleSizeChange = (e) => {
    const sku = e.target.value;

    setSizeSelection(sku);
  };

  useEffect(() => {
    if (!styles || !styles[styleSelector]) {
      return;
    }
    const { skus } = styles[styleSelector];
    const selectedSize = skus[sizeSelection];
    const quantity = selectedSize ? Math.min(styles[styleSelector].skus[sizeSelection].quantity, 15)
      : 0;
    setQuantityOptions(
      _.range(1, quantity + 1).map((amount) => (
        <option key={amount} value={amount}>{amount}</option>
      )),
    );
  }, [sizeSelection]);

  let buttonNoButton;

  const [alertMe, setAlert] = useState(null);

  const addItemToCart = () => {
    axios
      .post('/cart', { sku_id: sizeSelection })
      .then(() => setAlert('Added to cart'))
      .catch((err) => console.error(err));
  };

  if (sizeSelection !== null && quantity > 0) {
    buttonNoButton = (
      <button className="ov-checkout-button" type="button" onClick={addItemToCart}>
        ADD TO CART
      </button>
    );
  } else if (quantity === 0) {
    buttonNoButton = <h3>Out of Stock</h3>;
  } else if (sizeSelection === null && quantity === 16) {
    buttonNoButton = (
      <button className="ov-checkout-button" type="button" onClick={() => setAlert('Please select a size and quantity')}>
        ADD TO CART
      </button>
    );
  }

  return (
    <>
      <span className="ov-szqty">
        <select className="ov-style-sizes" onChange={(e) => handleSizeChange(e)}>
          <option>Pick a size</option>
          {styles && styles[count] && Object.entries(styles[styleSelector].skus).map(([sku, { quantity, size }]) => (<option default="Pick a size" key={sku} value={sku}>{size}</option>))}
        </select>
        &nbsp;
        <select className="ov-style-qty" onChange={(e) => setQuantity(e.target.value)}>
          {quantityOptions}
        </select>
      </span>
      <br />
      {alertMe}
      <br />
      {buttonNoButton}
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
  count: PropTypes.number.isRequired,
  styleSelector: PropTypes.number.isRequired,
};

AddToCart.defaultProps = {
  styles: [],
};

export default AddToCart;
