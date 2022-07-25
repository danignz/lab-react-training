import React from 'react';

export default function DriverCard(props) {
  const { name, rating, img, car } = props;
  const roundedRating = Math.round(rating);
  let starTemplate = '';

  switch (true) {
    case roundedRating < 1:
      starTemplate = '☆ ☆ ☆ ☆ ☆';
      break;
    case 1 <= roundedRating && roundedRating < 2:
      starTemplate = '★ ☆ ☆ ☆ ☆';
      break;
    case 2 <= roundedRating && roundedRating < 3:
      starTemplate = '★ ★ ☆ ☆ ☆';
      break;
    case 3 <= roundedRating && roundedRating < 4:
      starTemplate = '★ ★ ★ ☆ ☆';
      break;
    case 4 <= roundedRating && roundedRating < 5:
      starTemplate = '★ ★ ★ ★ ☆';
      break;
    case 5 <= roundedRating:
      starTemplate = '★ ★ ★ ★ ★';
      break;
    default:
  }

  return (
    <div className="DriverCard">
      <img src={img} alt="Pic of user" />
      <div>
        <h2>{name}</h2>
        <p>{starTemplate}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
