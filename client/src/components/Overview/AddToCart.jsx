import React, { useState } from 'react';

function AddToCart() {
  const [isClick, setClick] = useState(false);
  return (
    <div>
      <select name="size" id="size" className="ov-sizes">
        <option>select a size</option>
        <option value="xs">xs</option>
        <option value="s">s</option>
        <option value="m">m</option>
        <option value="l">l</option>
        <option value="xl">xl</option>
      </select>
      <select name="size" id="size" className="ov-qty">
        <option>qty</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
     <br></br>
      <button className="ov-checkoutButton">add to cart</button>
      </div>
  );
}

export default AddToCart;
