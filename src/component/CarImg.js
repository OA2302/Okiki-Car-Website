import React, { useEffect, useState } from 'react';

const CarImageComponent = () => {
  const [carImage, setCarImage] = useState('');

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual Unsplash API key
    const apiKey = 'YOUR_API_KEY';

    // Make a GET request to the Unsplash API to fetch a car image
    fetch(`https://api.unsplash.com/photos/random?query=car&client_id=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        // Extract the image URL from the API response
        const imageUrl = data.urls.regular;
        setCarImage(imageUrl);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {carImage && <img src={carImage} alt="Car" />}
    </div>
  );
};

export default CarImageComponent;
