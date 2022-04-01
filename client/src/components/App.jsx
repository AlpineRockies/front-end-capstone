/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import QuestionAnswers from './QuestionAnswers/QuestionAnswers.jsx';
import RatingReviews from './RatingReviews/RatingReviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

export const ProductIDContext = React.createContext(37312);

function App() {
  const [productID, setProductID] = useState(37312);

  useEffect(() => {
    // axios
    //   .get('/products')
    //   .then((results) => setData(results))
    //   .catch(console.error);
    setProductID(37312);
  });

  return (
    <div className="app">
      <h1>Team Alpine Rockies!</h1>
      <ProductIDContext.Provider value={productID}>
        <Overview />
        <RelatedItems />
        <QuestionAnswers />
        <RatingReviews />
      </ProductIDContext.Provider>
    </div>
  );
}

export default App;
