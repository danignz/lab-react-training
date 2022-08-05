import React, { useState } from 'react';

export default function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(img);

  const handlePhoto = () => {
    const newImage = image === img ? imgClicked : img;
    setImage(newImage);
  };

  return (
    <div>
      <img width="200px" onClick={handlePhoto} src={image} alt="Maxence pic" />
    </div>
  );
}
