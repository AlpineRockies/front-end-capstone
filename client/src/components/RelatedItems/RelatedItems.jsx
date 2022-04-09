/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-assign */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import _ from 'underscore';
import './style.css';
import { aveRating } from 'Utilities';
import Related from './RelatedProducts/Related';
import YourOutfit from './YourOutfit/YourOutfit';
import ProductContext from '../Context';

function RelatedItems() {
  // eslint-disable-next-line object-curly-newline
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
        // eslint-disable-next-line implicit-arrow-linebreak
        axios
          .get(`/products/${product}/styles`)
          .then((response) => response.data)
          .catch((err) => console.error(err))),
    ).then((response) => setRelatedItemsImg(response))
      .catch((err) => console.error(err));

    Promise.all(
      relatedItems.map((product) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        axios
          .get(`/products/${product}`)
          .then((response) => response.data)
          .catch((err) => console.error(err))),
    ).then((res) => setRelatedItemsDetails(res));

    Promise.all(
      relatedItems.map((product) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        axios
          .get(`/reviews/?product_id=${product}`)
          .then((response) => response.data)
          .catch((err) => console.error(err))),
    ).then((res) => setRelatedReviews(res));
  }, [relatedItems]);

  useEffect(() => {
    const aveRatingArray = _.map(relatedReviews, (product) => ({
      aveRating: aveRating(product.results),
    }));

    const accArr = _.map(relatedItems, (ea, index) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      _.extend(
        {},
        relatedItemsImg[index],
        relatedItemsDetails[index],
        aveRatingArray[index],
      ));
    setJoinedAPIDetails(accArr);
  }, [relatedReviews]);

  useEffect(() => {
    if (yourOutfitId) {
      const getYOImages = axios.get(`/products/${yourOutfitId}/styles`);
      const getYODetails = axios.get(`/products/${yourOutfitId}`);
      const getYOReviews = axios.get(`/reviews/?product_id=${yourOutfitId}`);
      axios
        .all([getYOImages, getYODetails, getYOReviews])
        .then((response) => {
          const ratingsArray = response[2].data.results;
          setYourOutfit([
            ...yourOutfit,
            {
              ...response[0].data,
              ...response[1].data,
              ...{ aveRating: aveRating(ratingsArray) },
            },
          ]);
        })
        .catch((err) => console.log(err));
    }
  }, [yourOutfitId]);

  return (
    <div className="ri-parent">
      <p className="headerText"> Related Items </p>
      <div className="ri-relateditems">
        <Related setYourOutfitId={setYourOutfitId}/>
      </div>
      <p className="headerText">Your Outfit</p>
      <div className="ri-youroutfit">
        <YourOutfit setYourOutfitId={setYourOutfitId} />
      </div>
    </div>
  );
}

export default RelatedItems;
