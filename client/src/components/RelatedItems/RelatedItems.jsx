/* eslint-disable no-return-assign */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import _ from 'underscore';
import './style.css';
import Related from './Related';
import YourOutfit from './YourOutfit';
import ProductContext from '../Context';

function RelatedItems() {
  const { productId, yourOutfit, setYourOutfit, setJoinedAPIDetails } =
    useContext(ProductContext);

  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedItemsImg, setRelatedItemsImg] = useState([]);
  const [relatedItemsDetails, setRelatedItemsDetails] = useState([]);
  const [yourOutfitId, setYourOutfitId] = useState();
  const [relatedReviews, setRelatedReviews] = useState();

  useEffect(() => {
    axios
      .get(`/products/${productId}/related`)
      .then((res) => setRelatedItems(res.data))
      .catch((err) => console.error(err));
  }, [productId]);

  useEffect(() => {
    Promise.all(
      relatedItems.map((product) =>
        axios
          .get(`/products/${product}/styles`)
          .then((response) => response.data)
          .catch((err) => <div>There was an API error: {err}</div>)
      )
    )
      .then((response) => setRelatedItemsImg(response))
      .catch((err) => console.error(err));

    Promise.all(
      relatedItems.map((product) =>
        axios
          .get(`/products/${product}`)
          .then((response) => response.data)
          .catch((err) => console.error(err))
      )
    ).then((res) => setRelatedItemsDetails(res));

    Promise.all(
      relatedItems.map((product) =>
        axios
          .get(`/reviews/?product_id=${product}`)
          .then((response) => response.data)
          .catch((err) => console.error(err))
      )
    ).then((res) => setRelatedReviews(res));
  }, [relatedItems]);

  // useEffect(() => {
  //   Promise.all(
  //     relatedItems.map((product) =>
  //       axios
  //         .get(`/products/${product}`)
  //         .then((response) => response.data)
  //         .catch((err) => console.error(err))
  //     )
  //   ).then((res) => setRelatedItemsDetails(res));
  // }, [relatedItems]);
  ////////////////////////
  // useEffect(() => {
  //   Promise.all(
  //     relatedItems.map((product) =>
  //       axios
  //         .get(`/reviews/?product_id=${product}`)
  //         .then((response) => response.data)
  //         .catch((err) => console.error(err))
  //     )
  //   ).then((res) => setRelatedReviews(res));
  // }, [relatedItems]);

  // useEffect(() => {
  //   console.log('We are RelatedReviews: ', relatedReviews)
  //   //update rating for product and store in object

  // }, [relatedReviews])

  useEffect(() => {
    const aveRating = _.map(relatedReviews, (product) => ({
      aveRating:
        _.reduce(product.results, (sum, num) => (sum + num.rating), 0) /
        product.results.length,
    }));
    console.log('aveRating: ', aveRating);

    const accArr = _.map(relatedItems, (ea, index) =>
      _.extend(
        {},
        relatedItemsImg[index],
        relatedItemsDetails[index],
        aveRating[index]
      )
    );
    setJoinedAPIDetails(accArr);
  }, [relatedReviews]);

  useEffect(() => {
    if (yourOutfitId) {
      const getYOImages = axios.get(`/products/${yourOutfitId}/styles`);
      const getYODetails = axios.get(`/products/${yourOutfitId}`);
      axios
        .all([getYOImages, getYODetails])
        .then((response) =>
          setYourOutfit([
            ...yourOutfit,
            { ...response[0].data, ...response[1].data },
          ])
        )
        .catch((err) => console.log(err));
    }
  }, [yourOutfitId]);

  return (
    <div className="ri-parent">
      <div className="ri-relateditems">
        <h3>Related Items</h3>
        <Related />
      </div>
      <div className="ri-youroutfit">
        <h3>Your Outfit</h3>
        <YourOutfit setYourOutfitId={setYourOutfitId} />
      </div>
    </div>
  );
}

export default RelatedItems;
