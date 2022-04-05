import React, { useState } from 'react';

function WriteReviewCharacteristic({ handleCharacteristic, metaData }) {
  const [characteristicWR, setCharacteristicWR] = useState(characteristicWR);
  const metaCharacteristic = metaData.characteristics;

  const sizeArr = [
    { id: 1, des: 'A size too small' },
    { id: 2, des: '1/2 a size too small' },
    { id: 3, des: 'Perfect' },
    { id: 4, des: '1/2 a size too big' },
    { id: 5, des: 'A size too wide' },
  ];
  const widthArr = [
    { id: 1, des: 'Too narrow' },
    { id: 2, des: 'Slightly narrow' },
    { id: 3, des: 'Perfect' },
    { id: 4, des: 'Slightly wide' },
    { id: 5, des: 'Too wide' },
  ];
  const comfortArr = [
    { id: 1, des: 'Uncomfortable' },
    { id: 2, des: 'Slightly uncomfortable' },
    { id: 3, des: 'Ok' },
    { id: 4, des: 'Comfortable' },
    { id: 5, des: 'Perfect' },
  ];
  const qualityArr = [
    { id: 1, des: 'Poor' },
    { id: 2, des: 'Below average' },
    { id: 3, des: 'What I expected' },
    { id: 4, des: 'Pretty great' },
    { id: 5, des: 'Perfect' },
  ];
  const lengthArr = [
    { id: 1, des: 'Runs short' },
    { id: 2, des: 'Runs slightly short' },
    { id: 3, des: 'Perfect' },
    { id: 4, des: 'Runs slightly long' },
    { id: 5, des: 'runs long' },
  ];
  const fitArr = [
    { id: 1, des: 'Runs tight' },
    { id: 2, des: 'Runs slightly tight' },
    { id: 3, des: 'Perfect' },
    { id: 4, des: 'Runs slightly long' },
    { id: 5, des: 'Runs long' },
  ];

  const arrAllCharacteristic = [
    { type: sizeArr, header: 'Size', index: '14' },
    { type: widthArr, header: 'Width', index: '15' },
    { type: comfortArr, header: 'Comfort', index: '16' },
    { type: qualityArr, header: 'Quality', index: '17' },
    { type: lengthArr, header: 'Length', index: '18' },
    { type: fitArr, header: 'Fit', index: '19' },
  ];

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
          if (i === arrAllCharacteristic.length - 1) {
            setCharacteristicWR(characteristicObj);
            handleCharacteristic?.(characteristicObj);
          }
        }
      }
    }
  };

  return (
    <div className="RR-wrc">
      <div className="RR-wrc-allArr">
        {arrAllCharacteristic.map((eachCharacteristic) => {
          return (
            <div
              className="RR-wrc-each-type"
              key={JSON.stringify(eachCharacteristic)}
            >
              <span>{eachCharacteristic.header}</span>
              <div className="RR-wrc-each-choice">
                {eachCharacteristic.type.map((choice) => (
                  <label key={choice.id}>
                    <input
                      value={choice.id}
                      name={eachCharacteristic.header}
                      type="radio"
                      onChange={(event) => handleSetCharacteristicChange(event)}
                    />
                    {choice.des}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WriteReviewCharacteristic;
