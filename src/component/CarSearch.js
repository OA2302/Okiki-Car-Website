import React, { useState, useEffect } from 'react';
import CarCard from './CarCard'
import CarsData from './CarsData';

function CarSearch() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    // You can fetch car data from an API here
    // For this example, we're using a static carsData array
    setCarData(CarsData);
  }, []);

  return (
    <div className="car-search">
      {carData.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarSearch;
