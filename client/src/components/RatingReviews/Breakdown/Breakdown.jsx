import React, { useState, useEffect, useContext } from 'react';
import ReviewEntryStar from '../Reviews/ReviewEntryStar.jsx';
import { arrAllCharacteristic } from './BreakdownCharacteristic';
import ProductContext from '../../Context';
import { lowercase, ratingPercentage } from 'Utilities';
import { BreakStarWrapper, CharacterWrapper, Range } from '../Style/RatingReviewStyle';
import { FaStar } from 'react-icons/fa';

function Breakdown({ metaData, handleStarReviewClick }) {
  const { avgRating } = useContext(ProductContext);
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
    return ratingPercentage(recFalse, recTrue) + '%';
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
        {mdRecArray && <h4>Percent users who recommend this product {handleRecommended()}</h4>}
      </div>
      <div className="RR-breakdown-star">
        <h4>Star Breakdown</h4>
        {avgRating && <h5> Average Stars {(Math.round(avgRating * 4) / 4).toFixed(2)}</h5>}
        {avgRating && <BreakStarWrapper><ReviewEntryStar rating={avgRating} /></BreakStarWrapper> }
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
      <CharacterWrapper>
        <h4>Characteristic Breakdown</h4>
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
      </CharacterWrapper>
    </div>
  );
}

export default Breakdown;
