import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import ProductInfo from './ProductInfo.jsx';

class Overview extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      styles: [],
    };
  }

  // example
  componentDidMount() {
    const random = Math.floor(Math.random() * (38321 - 37311) + 37311);
    console.log(random);
    axios.get(`/products/${random}`)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log('err in client', err);
      });

    axios.get(`/products/${random}/styles`)
      .then((response) => {
        this.setState({ styles: response.data });
      })
      .catch((err) => {
        console.log('err in client', err);
      });
  }

  render() {
    return (
      <div className="ov-overview">
        <div className="ov-imageGallery">
        <h3>Images</h3>
        </div>
        <div className="ov-selection">
          <div className="ov-productInfo">
            <h3>Info</h3>
            <ProductInfo description={this.state.data}/>
          </div>
          <div className="ov-styles">
            <h3>Styles</h3>
          </div>
          <div className="ov-checkout">
            <h3>Checkout</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
