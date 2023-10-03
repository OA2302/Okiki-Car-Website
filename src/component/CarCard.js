import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCalendar, FaUsers, FaBolt, FaRoad, FaCogs, FaDollarSign, FaThumbsUp } from 'react-icons/fa';
import './carcard.css';
import CarsData from './CarsData';

function CarCard({ car }) {
  const {
    imageUrl,
    name,
    yearProduced,
    occupants,
    hybrid,
    distanceOnFullTank,
    automatic,
    price,
  } = car;

  return (
    <div className="car-card">
      <img src={imageUrl} alt={name} />

      <h2>{name}</h2>
      <p> <FaCalendar/>Year Produced: {yearProduced}</p>
      <p>
        <FaUsers /> Occupants: {occupants}
      </p>
      {hybrid && (
        <p>
          <FaBolt /> Power Source: Hybrid
        </p>
      )}
      <p>
        <FaRoad /> Distance on Full Tank: {distanceOnFullTank} miles
      </p>
      <p>
        <FaCogs /> Transmission: {automatic ? 'Automatic' : 'Manual'}
      </p>
      <p>
        <FaDollarSign /> Price: ${price}
      </p>
      <div className='flex' >
      <button className="like-button">
        <FaThumbsUp />
      </button>
      <button>
        Rent Now
      </button>
      </div>
    </div>
  );
}

export default CarCard;
