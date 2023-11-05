/* eslint-disable react/prop-types */

import { useState } from "react";

const FilterByPrice = ({rooms}) => {
    const [sortBy, setSortBy] = useState('low-to-high');
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
      };
      const sortedRooms = [...rooms];

      if (sortBy === 'low-to-high') {
        sortedRooms.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'high-to-low') {
        sortedRooms.sort((a, b) => b.price - a.price);
      }
    return (
         <div>
      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
      
    </div>
    );
};

export default FilterByPrice;