import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Breakdown({ productId }) {
  const [starBD, setStarBD] = useState(null);
  const [recBD, setRecBD] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [fit, setFit] = useState(null);
  const [length, setLength] = useState(null);
  const [quality, setQuality] = useState(null);

  //const [breakdown, setBreakdown] = useState(null);

  useEffect(() => {
    axios
      .get(`reviews/meta?product_id=${productId}`)
      .then((results) => {
        setStarBD(results.data.ratings);
        setRecBD(results.data.recommended);
        setComfort(results.data.characteristics.Comfort);
        setFit(results.data.characteristics.Fit);
        setLength(results.data.characteristics.Length);
        setQuality(results.data.characteristics.Quality);
       // setBreakdown(results.data.characteristics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  // console.log('star1', starBD[1]);
  // console.log('star2', starBD[2]);
  // console.log('star3', starBD[3]);
  // console.log('star4', starBD[4]);
  // console.log('star5', starBD[5]);
  console.log('rec no', recBD);
  console.log('comfrt', comfort);

  return(
    <div>
      <h2> star/pro breakdown</h2>
      {/* {breakdown && <p>{breakdown.Comfort.id}</p>} */}
    </div>
  )

}

export default Breakdown;