import React, { useState } from 'react';
import CarsData from './component/CarsData';
import CarList from './component/Carslist';
import Pagination from './component/Pagination';
import SearchBar from './component/CarSearch';
import './App.css'

function App() {
  const [cars, setCars] = useState(CarsData); // Use state to stor
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Calculate the index range of cars to display on the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Handle page change
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search
  const handleSearch = (searchTerm) => {
    // Filter the cars based on the search term (you can customize this logic)
    const filteredCars = CarsData.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCars(filteredCars);
    setCurrentPage(1); // Reset to the first page when performing a search
  };

  return (
    <div className="App">
      <div className='flex'>
      <h1>Okiki Auto store</h1>

<SearchBar onSearch={handleSearch} />
      </div>

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
