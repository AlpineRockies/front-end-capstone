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
  }, [relatedItems]);

  useEffect(() => {
    Promise.all(
      relatedItems.map((product) =>
        axios
          .get(`/products/${product}`)
          .then((response) => response.data)
          .catch((err) => console.error(err))
      )
    ).then((res) => setRelatedItemsDetails(res));
  }, [relatedItems]);

  useEffect(() => {
    const accArr = _.map(relatedItems, (ea, index) =>
      _.extend(relatedItemsImg[index], relatedItemsDetails[index])
    );
    setJoinedAPIDetails(accArr);
  }, [relatedItemsDetails]);

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
