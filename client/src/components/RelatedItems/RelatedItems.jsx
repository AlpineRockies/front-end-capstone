import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Related from './Related.jsx';
import Comparison from './Comparison.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
      outfit: [],
    };
  }

  componentDidMount() {
    console.log('[componentDidMount] RelatedItems');
    this.getRelatedData();
  }

  handleClick = (event) => {
    console.log('[RelatedItems] handleClick :', event);
    // feed this item back to app for reload of Overview
    this.getYourOutfit(event);
  }



  getRelatedData(product_id = 38013) {
    axios
      .get(`/products/${product_id}/related`)
      .then((test) => {
        console.log('test', test);
        return test;
      })
      .then((response) =>
        Promise.all(
          response.data.map((product_id) =>
            axios
              .get(`/products/${product_id}/styles`)
              .then((response) => response.data)
              .catch((err) => {
                console.log(err);
              })
          )
        )
      )
      .then((arr) => {
        console.log('array ', arr);
        this.setState({
          relatedItems: arr,
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  getYourOutfit = (event) => {
    console.log("[getYourOutfit] ReleatedItems.jsx", event);
    // axios
    //   .get(`/products/${product_id}/styles`)
    //   .then((response) => response.data)
    //   .then((prod) => {
    //     console.log('YOUR OUTFIT: ', prod);
    //   })
    //   .catch((err) => console.log(err));
  }

  render() {
    const { relatedItems } = this.state;
    return (
      <div className="ri-parent">
        <div className="ri-relateditems">
          <h3>Related Items</h3>
          <Related relatedItems={relatedItems} handleClick={this.handleClick} />
        </div>
        <div className="ri-comparison">
          <h3>Comparison</h3>
          <Comparison />
        </div>
      </div>
    );
  }
}

export default RelatedItems;
