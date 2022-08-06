import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleDecrement = () => {
    const newIndex = index === 0 ? images.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleIncrement = () => {
    const newIndex = index === images.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <>
      <button onClick={handleDecrement}>Left</button>
      <img width="200px" src={images[index]} alt="Photograph of a person" />
      <button onClick={handleIncrement}>Right</button>
    </>
  );
}
