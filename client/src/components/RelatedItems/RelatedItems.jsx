import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
import './style.css';
import Related from './Related';
import YourOutfit from './YourOutfit';

export const CombinedAPIDetails = React.createContext();
export const YourOutfitContext = React.createContext();

function RelatedItems() {
  const [productId, setProductId] = useState(38013);
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedItemsImg, setRelatedItemsImg] = useState([]);
  const [relatedItemsDetails, setRelatedItemsDetails] = useState([]);
  const [combinedAPIDetails, setCombinedAPIDetails] = useState([]);
  const [yourOutfitId, setYourOutfitId] = useState();
  const [yourOutfit, setYourOutfit] = useState([]);

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



  // useEffect(() => {
  //   const getRiImages = relatedItems.map(
  //     (product) => `/products/${product}/styles`
  //   );
  //   const getRiDetails = relatedItems.map((product) => `products/${product}`);
  //   console.log('test Mapping area: ', getRiImages, getRiDetails);

  //   axios
  //     .all(getRiImages.map((endpoint) => axios.get(endpoint)))
  //     .then(data => setRelatedItemsImg([...relatedItemsImg, ...data.data]))
  //     .then(() => console.log("relatedItemsImg",relatedItemsImg))
  //     .then(
  //       axios
  //       .all(getRiDetails.map((endpoint) => axios.get(endpoint)))
  //       .then(data => setRelatedItemsDetails([...relatedItemsDetails, ...data.data]))
  //       .catch(err => console.log(err))
  //     )
  //     .catch(err => console.log(err))
  // }, [relatedItems]);

  useEffect(() => {
    console.log('RelatedItems: ', relatedItems)
    const accArr = _.map(relatedItems, (ea, index) =>
      _.extend(relatedItemsImg[index], relatedItemsDetails[index])
    );
    setCombinedAPIDetails(accArr);
  }, [relatedItemsDetails]);

  useEffect(() => {
    console.log('outfitID ', yourOutfitId);
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
        <CombinedAPIDetails.Provider value={combinedAPIDetails}>
          <Related setProductId={setProductId} />
        </CombinedAPIDetails.Provider>
      </div>
      <div className="ri-youroutfit">
        <h3>Your Outfit</h3>
        <YourOutfitContext.Provider value={yourOutfit}>
          <YourOutfit setYourOutfitId={setYourOutfitId} productId={productId} />
        </YourOutfitContext.Provider>
      </div>
    </div>
  );
}

export default RelatedItems;
