import React from 'react';
import Restaurant from './restaurant';

function RestaurantContainer(props) {
  const renderList = (restaurants) => restaurants.map((rest) => <Restaurant name={rest.name} cuisineType={rest.cuisineType} stars={rest.stars} key={rest.name} />);

  return (
    <div>
      {renderList(props.data)}
    </div>
  );
}

export default RestaurantContainer;
