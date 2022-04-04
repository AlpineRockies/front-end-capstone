import React, { useState } from 'react';
import { MdOutlineAddBox } from 'react-icons/md'

function Comparison(props) {


  const [arr, setArr] = useState([])



  return (
    <div>
      <MdOutlineAddBox className="comp-additem" />
    </div>
  );
}
export default Comparison;
