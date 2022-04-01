import React from 'react';

function Items (props) {
  console.log(props);


  return (
    <li>
      <img src={props.url} />
      <p>Category</p>
      <p>Name: - {props.name}</p>
      <p>{props.original_price}</p>
    </li>
  )

}

export default Items;