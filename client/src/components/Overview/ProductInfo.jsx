import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { CgTwitter } from "react-icons/Cg";
import { FaPinterest } from "react-icons/fa";

function ProductInfo({ description, styles }) {
  return (
    <div>
      <p>stars and review</p>
      <p> {description.category}</p>
      <p>{description.name}</p>
      <div> {description.default_price}</div>
      <div className="SocialMedia">
        <FaFacebook className="Facebook"/>
        <CgTwitter className="Twitter"/>
        <FaPinterest className="Pinterest"/>
      </div>
    </div>
  );
}

export default ProductInfo;
