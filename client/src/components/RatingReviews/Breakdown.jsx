import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ratingPercentage } from 'Utilities';

function Breakdown({ metaData }) {
  const [mdCharArray, setMDCharArray] = useState(null);
  const [mdStarArray, setMDStarArray] = useState(null);
  const [mdRecArray, setMDRecArray] = useState(null);

  const handleObjToArray = (metaDataObj) => {
    const metaDataArray = [];
    for (const [mdKey, mdValue] of Object.entries(metaDataObj)) {
      metaDataArray.push({ name: mdKey, valueObj: mdValue });
    }
    if (metaDataObj === metaData.characteristics) {
      if (!mdCharArray) {
        setMDCharArray(metaDataArray);
      }
    }
    if (metaDataObj === metaData.ratings) {
      if (!mdStarArray) {
        setMDStarArray(metaDataArray);
      }
    }
    if (metaDataObj === metaData.recommended) {
      if (!mdRecArray) {
        setMDRecArray(metaDataArray);
      }
    }
  };

  const handleRecommended = () => {
    const recFalse = Number(mdRecArray[0].valueObj);
    const recTrue = Number(mdRecArray[1].valueObj);
    return ratingPercentage(recFalse, recTrue) + '% Recommended';
  };

  return (
    <div className="RR-breakdown">
      <div className="RR-breakdown-invoke">
        {handleObjToArray(metaData.characteristics)}
        {handleObjToArray(metaData.ratings)}
        {handleObjToArray(metaData.recommended)}
      </div>
      <div className="RR-breakdown-recommend">
        {mdRecArray && handleRecommended()}
      </div>

      <div className="RR-breakdown-star">
        {mdStarArray &&
          mdStarArray.map((eachStar) => (
            <label key={JSON.stringify(eachStar)}>
              {eachStar.name} Star
              {[...Array(Number(eachStar.name))].map((numStars, i) => (
                <label key={i}>
                  <FaStar value={numStars} />
                </label>
              ))}
              {eachStar.valueObj} Stars
              <br></br>
            </label>
          ))}
      </div>
      <div className="RR-breakdown-char">
        {mdCharArray &&
          mdCharArray.map((eachChar) => (
            <label key={eachChar.name}>
              {eachChar.name}
              <input
                type="range"
                min="0"
                max="5"
                value={Math.floor(eachChar.valueObj.value)}
                readOnly
              />
              <output>{Math.floor(eachChar.valueObj.value)}</output>
              <br></br>
            </label>
          ))}
      </div>
    </div>
  );
}

export default Breakdown;
