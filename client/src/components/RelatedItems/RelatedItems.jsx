import React, { Component } from 'react';
import axios from 'axios';
import Items from './Items.jsx';

class RelatedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
    };
  }

  componentDidMount() {
    console.log('[componentDidMount] RelatedItems');
    this.getRelatedData();
  }

  getRelatedData() {
    axios
      .get('/products/38321/related')
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



  render() {
    const { relatedItems } = this.state;
    if (relatedItems && relatedItems.length !== 0) {
      return (
        <ul className="ri-items">
          {relatedItems.map((item) => (
            <Items className="ri_eachitem"
              url={item.results[0].photos[0].thumbnail_url}
              name={item.results[0].name}
              original_price={item.results[0].original_price}
               />
          ))}
        </ul>
      );
    }
    return <p>Please Wait</p>;
  }
}

export default RelatedItems;
