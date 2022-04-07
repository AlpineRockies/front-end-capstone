import React, {
// useState,
// useEffect,
// useContext
} from 'react';
// import Select from 'react-select';
import PropTypes from 'prop-types';

function AddToCart(props) {
  // if (props.styles.results !== undefined) {

  // }
  // eslint-disable-next-line no-unused-vars
  const { styles } = props;
  // const sizes = [{ label: 'pick a size' }, { label: 's' }];
  // const qty = [{ label: 'how many do you want?' }, { label: '1' }];
  return (
    <>
      {/* <div className="ov-dropdown-sizes">

        <select> */}
      {/* {styles[0].skus.map((option) => {
            <option value={option.size}>{option.size}</option>
          })} */}
      {/* <Select options={sizes} />
        </select>
      </div>
      <div className="ov-qty">
        <Select options={qty} />
      </div> */}
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
