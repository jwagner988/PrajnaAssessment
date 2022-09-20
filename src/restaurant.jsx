import React from 'react';

function Restaurant(props) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <p>{props.name}</p>
      <p>{props.cuisineType}</p>
      <p>
        {props.stars}
        {' '}
        Stars
      </p>
    </div>
  );
}

export default Restaurant;
