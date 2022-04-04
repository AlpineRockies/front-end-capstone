import React, { useState } from 'react';

function WriteReviewCharacteristic() {
  const [sizeWR, setSizeWR] = useState(0);
  const [widthWR, setWidthWR] = useState(0);
  const [comfortWR, setComfortWR] = useState(0);
  const [qualityWR, setQualityWR] = useState(0);
  const [lengthWR, setLengthWR] = useState(0);
  const [fitWR, setFitWR] = useState(0);

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

  // const arrAll = [sizeArr, widthArr, comfortArr, qualityArr, lengthArr, fitArr];

  const arrAll = [
    { type: sizeArr, header: 'Size' },
    { type: widthArr, header: 'Width' },
    { type: comfortArr, header: 'Comfort' },
    { type: qualityArr, header: 'Quality' },
    { type: lengthArr, header: 'Length' },
    { type: fitArr, header: 'Fit' },
  ];

  const handleChange = (event) => {
    console.log('hit', event.target.value);
  };

  return (
    <div className='RR-wrc'>
      <div className='RR-wrc-allArr'>
        {arrAll.map((eachCharacteristic) => {
          return (
            <div className='RR-wrc-each-type' key={JSON.stringify(eachCharacteristic)}>
              <span>{eachCharacteristic.header}</span>
              <div className='RR-wrc-each-choice'>
                {eachCharacteristic.type.map((choice) => {
                  return (
                    <label key={choice.id}>
                      <input
                        value={choice.id}
                        name={choice.des}
                        type='radio'
                        onChange={(event) => handleChange(event)}
                      />
                      {choice.des}
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WriteReviewCharacteristic;
