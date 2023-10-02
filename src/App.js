
import React, { useState } from 'react';
import CarsData from './component/CarsData';
import CarList from './component/Carslist';
import Pagination from './component/Pagination';

function App() {
  const [cars] = useState(CarsData); // Use state to store the car data
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Calculate the index range of cars to display on the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Handle page change
  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <h1>Car Search Website</h1>
      <CarList cars={currentCars} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(cars.length / carsPerPage)}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default App;
