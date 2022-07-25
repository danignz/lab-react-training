import React from 'react';

export default function BoxColor(props) {
  const { r, g, b } = props;

  const divStyle = {
    backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
  };

  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  return (
    <div className="card-container rgbCenter" style={divStyle}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}
