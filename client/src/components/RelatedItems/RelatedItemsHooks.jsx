import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
import './style.css';
import Related from './Related.jsx';
import Comparison from './Comparison.jsx';

export const CombinedAPIDetails = React.createContext();

function RelatedItemsHooks() {
  const [productId, setProductId] = useState(38013);
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedItemsImg, setRelatedItemsImg] = useState([]);
  const [relatedItemsDetails, setRelatedItemsDetails] = useState([]);
  const [combinedAPIDetails, setCombinedAPIDetails] = useState([]);
  const [outfit, setOutfit] = useState([]);

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
    const accArr = []
    for (let i = 0; i < relatedItems.length; i++ ) {
      accArr.push(_.extend(relatedItemsImg[i], relatedItemsDetails[i]));
    }
    setCombinedAPIDetails(accArr)

  }, [relatedItemsDetails])

  const handleClick = (event) => {
    // under construction
    console.log('[RelatedItems] handleClick :', event);
    // feed this item back to app for reload of Overview
    getYourOutfit(event);
  };

  const getYourOutfit = (event) => {
    console.log('[getYourOutfit] ReleatedItems.jsx', event);

  };

  return (
    <div className="ri-parent">
      <div className="ri-relateditems">
        <h3>Related Items</h3>
         <CombinedAPIDetails.Provider value={combinedAPIDetails}>
            <Related setProductId={setProductId} />
         </CombinedAPIDetails.Provider>
      </div>
      <div className="ri-comparison">
        <h3>Comparison</h3>
        <Comparison />
      </div>
    </div>
  );
}

export default RelatedItemsHooks;
