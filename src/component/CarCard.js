import React from 'react';
import {FaCalendar, FaUsers, FaBolt, FaRoad, FaCogs, FaDollarSign, FaThumbsUp } from 'react-icons/fa';
import './carcard.css'

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
      <h3>{name}</h3>
      <p>
        <FaCalendar /> Year Produced: {yearProduced}
      </p>
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
      <button className="like-button">
        <FaThumbsUp/>
        </button>
        </div>
        );
      }

      export default CarCard;