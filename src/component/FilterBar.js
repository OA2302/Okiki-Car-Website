
import React from 'react';

const FilterBar = ({ selectedCarType, onCarTypeChange }) => {
  return (
    <div className="filter-bar">
      <label htmlFor="car-type">Select Car Type:</label>
      <select
        id="car-type"
        value={selectedCarType}
        onChange={(e) => onCarTypeChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="sports">Sports Car</option>
        <option value="muscle">Muscle Car</option>
        <option value="family">Family Car</option>
      </select>
    </div>
  );
};

export default FilterBar;
