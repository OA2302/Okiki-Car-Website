import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarDataApi() {
  const [carData, setCarData] = useState([]);
  const apiUrl = 'https://example.com/api/cars'; // Replace with your API endpoint

  useEffect(() => {
    // Fetch car data from the API when the component mounts
    axios.get(apiUrl)
      .then((response) => {
        setCarData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
      });
  }, [apiUrl]);

  return (
    <div>
      <h1>Car Data from API</h1>
      <ul>
        {carData.map((car) => (
          <li key={car.id}>
            <h2>{car.name}</h2>
            <img src={car.imageUrl} alt={car.name} />
            <p>Year Produced: {car.yearProduced}</p>
            {/* Include other car details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarDataApi;
