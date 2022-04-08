import React, { useState, useEffect } from 'react';
import { arrAllCharacteristic } from '../Breakdown/BreakdownCharacteristic'

function WriteReviewCharacteristic({ handleCharacteristic, metaData }) {
  const [characteristicWR, setCharacteristicWR] = useState(characteristicWR);
  const metaCharacteristic = metaData.characteristics;

  const characteristicObj = {};
  const handleSetCharacteristicChange = (event) => {
    for (let i = 0; i < arrAllCharacteristic.length; i++) {
      if (arrAllCharacteristic[i].header === event.target.name) {
        if (metaCharacteristic[event.target.name] !== undefined) {
          if (
            characteristicObj[metaCharacteristic[event.target.name].id] ===
            undefined
          ) {
            characteristicObj[metaCharacteristic[event.target.name].id] =
              parseInt(event.target.value);
          }
        }
        if (i === arrAllCharacteristic.length - 1) {
          setCharacteristicWR(characteristicObj);

          handleCharacteristic?.(characteristicObj);
        }
      }
    }
  };

  return (
    <div className='RR-wrc'>
      <div className='RR-wrc-allArr'>
        {arrAllCharacteristic.map((eachCharacteristic) => (
          <div
            className='RR-wrc-each-type'
            key={JSON.stringify(eachCharacteristic)}
          >
            <span>{eachCharacteristic.header}</span>
            <div className='RR-wrc-each-choice'>
              {eachCharacteristic.type.map((choice) => (
                <label key={choice.id}>
                  <input
                    value={choice.id}
                    name={eachCharacteristic.header}
                    type='radio'
                    onChange={(event) => handleSetCharacteristicChange(event)}
                  />
                  {choice.des}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WriteReviewCharacteristic;
