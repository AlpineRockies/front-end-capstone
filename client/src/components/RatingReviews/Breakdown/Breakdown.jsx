import React, { useState } from 'react';
import ReviewEntryStar from '../Reviews/ReviewEntryStar.jsx';
import { arrAllCharacteristic } from './BreakdownCharacteristic';
import { lowercase, ratingPercentage } from 'Utilities';
import { BreakdownCharacter, Range } from '../Style/RatingReviewStyle';
import { FaStar } from 'react-icons/fa';

function Breakdown({ metaData, handleStarReviewClick }) {
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
    const recFalse = Number(mdRecArray[0]?.valueObj);
    const recTrue = Number(mdRecArray[1]?.valueObj);
    return ratingPercentage(recFalse, recTrue) + '% Recommended';
  };

  const handleDesDisplay = (characteristic, value) => {
    for (let i = 0; i < arrAllCharacteristic.length; i++) {
      if (arrAllCharacteristic[i].header === characteristic) {
        for (let j = 0; j < arrAllCharacteristic[i].type.length; j++) {
          if (arrAllCharacteristic[i].type[j].id === value) {
            return arrAllCharacteristic[i].type[j].des;
          }
        }
      }
    }
  };

  const handleStarBreakdownClick = (star) => {
    event.preventDefault();
    handleStarReviewClick(Number(star));
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
      <br /> <br />
      <div className="RR-breakdown-star">
        {mdStarArray &&
          mdStarArray.map((eachStar) => (
            <label key={JSON.stringify(eachStar)}>
              {eachStar.name} Star
              <span onClick={() => handleStarBreakdownClick(eachStar.name)}>
                {' '}
                <ReviewEntryStar rating={Number(eachStar.name)} />
              </span>
              {eachStar.valueObj} Reviews
              <br /> <br />
            </label>
          ))}
      </div>
      <BreakdownCharacter>
        {mdCharArray &&
          mdCharArray.map((eachChar) => (
            <label key={eachChar.name}>
              <output>
                Average response for {lowercase(eachChar.name)} is{' '}
                {lowercase(
                  handleDesDisplay(
                    eachChar.name,
                    Math.floor(eachChar.valueObj.value)
                  )
                )}
              </output>
              <br /> <br />
              {handleDesDisplay(eachChar.name, 1)}
              <Range>
                <input
                  className="slider"
                  type="range"
                  min="1"
                  max="5"
                  value={Math.floor(eachChar.valueObj.value)}
                  readOnly
                />
              </Range>
              {handleDesDisplay(eachChar.name, 5)}
              <br /> <br />
            </label>
          ))}
      </BreakdownCharacter>
    </div>
  );
}

export default Breakdown;
