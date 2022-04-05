/* eslint-disable arrow-body-style */
import React, {
  useState,
  useEffect,
  useContext,
  Component,
} from 'react';
import axios from 'axios';
import './style.css';
import ProductInfo from './ProductInfo';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';

function Overview() {
  const random = Math.floor(Math.random() * (38321 - 37311) + 37311);
  const [productId, setProductId] = useState(random);
  const [styles, setStyles] = useState([]);
  const [description, setDescription] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`/products/${productId}/styles`)
      .then((res) => setStyles(res.data.results))
      .catch((err) => console.error(err));
  }, [productId]);

  useEffect(() => {
    Promis.all(
      axios
        .get(`/products/${productId}`)
        .then((res) => setDescription(res.data))
        .catch((err) => console.log(err)),
    );
  }, [productId]);

  return (
    <div className="ov-overview">
      <div className="ov-imageGallery">
        <h3>Images</h3>
        <ImageGallery styles={styles} count={count} />
      </div>
      <div className="ov-selection">
        <div className="ov-productInfo">
          <h3>Info</h3>
          <ProductInfo styles={styles} />
        </div>
        <div className="ov-styles">
          <p>Styles</p>
          <StyleSelector styles={styles} />
        </div>
        <div className="ov-checkout">
          <h3>Checkout</h3>
          <AddToCart styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default Overview;
