import React, { useState } from 'react';
import RestaurantContainer from './restaurantContainer';
import data from './data';

function App() {
  const [restaurants, setRestaurants] = useState(data);

  function cuisines(list) {
    const cuisineList = {};
    for (const curr of list) {
      if (!cuisineList[curr.cuisineType]) {
        cuisineList[curr.cuisineType] = true;
      }
    }
    return Object.keys(cuisineList);
  }

  function handleSort(e) {
    const newData = [...restaurants].sort((a, b) => b.stars - a.stars);
    setRestaurants(newData);
  }

  function handleSelect(e) {
    if (e.target.value === 'All') {
      setRestaurants(data);
    } else {
      const newData = [...data].filter((curr) => curr.cuisineType === e.target.value);
      setRestaurants(newData);
    }
  }

  function handleSearch(e) {
    const search = e.target.value;
    if (search !== '') {
      const results = restaurants.filter((curr) => curr.name.toLowerCase().startsWith(search.toLowerCase()));
      setRestaurants(results);
    } else setRestaurants(data);
  }

  return (
    <div className="App">
      <p>Prajna app</p>
      <form>
        <input
          type="search"
          placeholder="Search for restaurants!"
          onChange={handleSearch}
        />
        <label>
          Select Cuisine Type...
          <select onChange={handleSelect}>
            <option value="All">Show All</option>
            {cuisines(data).map((rest) => <option value={rest}>{rest}</option>)}
          </select>
        </label>
      </form>
      <button onClick={handleSort}>Sort by stars</button>
      <RestaurantContainer data={restaurants} />
    </div>
  );
}

export default App;
