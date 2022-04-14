import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItems';
import QuestionAnswers from './QuestionAnswers/QuestionAnswers';
import RatingReviews from './RatingReviews/RatingReviews';
import ProductContext from './Context';
import Header from './Header/Header';

function App() {
  const [productId, setProductId] = useState(38320);
  const [productInfo, setProductInfo] = useState({});
  const [yourOutfit, setYourOutfit] = useState(() => {
    // eslint-disable-next-line no-undef
    const savedYourOutfit = localStorage.getItem('yourOutfit');
    const initialYourOutfit = JSON.parse(savedYourOutfit);
    return initialYourOutfit || [];
  });
  const [joinedAPIDetails, setJoinedAPIDetails] = useState([]);
  const [handleNewQorA, setHandleNewQorA] = useState(() => {});
  const [avgRating, setAvgRating] = useState(null);

  const memoizedState = useMemo(
    () => ({
      productId,
      setProductId,
      productInfo,
      setProductInfo,
      yourOutfit,
      setYourOutfit,
      joinedAPIDetails,
      setJoinedAPIDetails,
      handleNewQorA,
      setHandleNewQorA,
      avgRating,
      setAvgRating,
    }),
    [productId, productInfo, yourOutfit, joinedAPIDetails],
  );

  // update the context store when a new product is selected
  useEffect(() => {
    axios
      .get(`/products/${productId}`)
      .then((results) => setProductInfo(results.data))
      // eslint-disable-next-line no-console
      .catch(console.error);
  }, [productId]);

  const [mode, setMode] = useState('light')

  const toggleColorMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
  };

  return (
    <div className="app" data-color-mode={mode}>
      <Header toggleColorMode={toggleColorMode}/>
      <ProductContext.Provider value={memoizedState}>
        <Overview avgRating={avgRating} />
        <RelatedItems />
        <QuestionAnswers />
        <RatingReviews />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
