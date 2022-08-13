import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

export default function RGBColorPicker() {
  const [colors, setColors] = useState({
    rValue: 255,
    gValue: 150,
    bValue: 0,
  });

  const handleChangeColor = (colors) => {
    setColors((prev) => {
      return {
        ...prev,
        ...colors,
      };
    });
  };

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={colors.rValue}
        onChange={handleChangeColor}
      />

      <SingleColorPicker
        color="g"
        value={colors.gValue}
        onChange={handleChangeColor}
      />

      <SingleColorPicker
        color="b"
        value={colors.bValue}
        onChange={handleChangeColor}
      />
      <div className="containerRGB">
        <div
          id="resultRGB"
          style={{
            backgroundColor: `rgb(${colors.rValue.toString()}, ${colors.gValue.toString()}, ${colors.bValue.toString()})`,
          }}
        ></div>
        <p>
          rgb({colors.rValue},{colors.gValue},{colors.bValue})
        </p>
      </div>
    </div>
  );
}
