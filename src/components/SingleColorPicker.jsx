import React, { useState, useEffect } from 'react';

export default function SingleColorPicker({ color, value, onChange }) {
  const colorName = color + 'Value';

  const [colors, setColors] = useState({
    [colorName]: value,
  });

  const handleChange = (e) => {
    setColors((prev) => {
      return {
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    onChange(colors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]);

  const selectColor = (rgbColor, valueColor) => {
    let backgroundValue = '';
    if (rgbColor === 'r') {
      backgroundValue = `rgb(${valueColor.toString()}, 0, 0)`;
    } else if (rgbColor === 'g') {
      backgroundValue = `rgb(0, ${valueColor.toString()}, 0)`;
    } else {
      backgroundValue = `rgb(0, 0, ${valueColor.toString()})`;
    }
    return { backgroundColor: backgroundValue };
  };

  return (
    <div className="containerPicker">
      <div className="pickBox" style={selectColor(color, value)}></div>
      {/* <div className="pickBox" style={{ backgroundColor: 'blue' }}></div>  */}
      <p>{color.toUpperCase()}:</p>
      <input
        type="number"
        name={colorName}
        min="0"
        max="255"
        value={colors[colorName]}
        onChange={handleChange}
      />
    </div>
  );
}
