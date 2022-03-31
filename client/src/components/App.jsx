/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import QuestionAnswers from './QuestionAnswers/QuestionAnswers.jsx';
import RatingReviews from './RatingReviews/RatingReviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

function App() {
  const [product, setProduct] = useState(38321);

  useEffect(() => {
    // axios
    //   .get('/products')
    //   .then((results) => setData(results))
    //   .catch(console.error);
    setProduct(38321);
  });

  return (
    <div className="app">
      <h1>Team Alpine Rockies!</h1>
      <Overview />
      <RelatedItems />
      <QuestionAnswers />
      <RatingReviews />
    </div>
  );
}

export default App;
