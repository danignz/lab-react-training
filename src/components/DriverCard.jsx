import React from 'react';
import Rating from './Rating';

export default function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div className="DriverCard">
      <img src={img} alt="Pic of user" />
      <div>
        <h2>{name}</h2>
        <Rating>{rating.toString()}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
