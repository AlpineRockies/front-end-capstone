/* eslint-disable arrow-body-style */
import React, {
  // useState,
  // useEffect,
  // useContext,
  Component,
} from 'react';
import axios from 'axios';
import './style.css';
import ProductInfo from './ProductInfo';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: [],
      styles: [],
      count: 0,
    };
    this.addToCount = this.addToCount.bind(this);
    this.thumbnailClickHandler = this.thumbnailClickHandler.bind(this);
  }

  componentDidMount() {
    // const random = Math.floor(Math.random() * (38321 - 37311) + 37311);

    axios.get('/products/37311/styles')
      .then((response) => {
        this.setState(() => {
          return { styles: response.data.results };
        });
      });
  }

  addToCount() {
    const { count, styles } = this.state;

    if (count < styles.results.length - 1) {
      this.setState({ count: count + 1 });
    } else {
      this.setState({ count: 0 });
    }
  }

  thumbnailClickHandler(e) {
    e.preventDefault();
    console.log(e);
    this.setState({ count: e.target.value });
  }

  render() {
    const { count, styles } = this.state;
    return (
      <div className="ov-overview">
        <div className="ov-imageGallery">
          <h3>Images</h3>
          <ImageGallery styles={styles} count={count} counter={this.addToCount} />
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
}

export default Overview;
