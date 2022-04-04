import React from 'react';

function ProductInfo({ description, styles }) {
  // let price;
  // if (styles.results !== undefined) {
  //  if(styles.result[0].sale_price !== null){
  //   price = <p>{styles.result[0].original_price}  {description.default_price}</p>
  // } else {
  //   price =<p>{description.default_price}</p>
  // }
  // }
  return (
    <div>
      <p>stars and review</p>
      <p> {description.category}</p>
      <p>{description.name}</p>
      <div> {description.default_price}</div>
      <p>
        Social Media Icons
      </p>
    </div>
  );
}

export default ProductInfo;
