import React from 'react';

function Items (props) {
  console.log(props);



  return (
    <div className="ri-item" onClick={() => props.handleClick(props.id)}>
      <span>
      <img className="ri-thumbnails" src={props.url} />
      </span>
      <h3>Category</h3>
      <p>Name: - {props.name}</p>
      <p>Price: {props.original_price}</p>
    </div>
  )

}

export default Items;