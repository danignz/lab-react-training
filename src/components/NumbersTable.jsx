import React from 'react';

export default function NumbersTable({ limit }) {
  let background;
  const setColor = (value) => {
    background = value % 2 === 0 ? 'red' : 'white';
  };

  return (
    <ul className="NumbersTable">
      {Array.from({ length: limit }).map((elem, index) => {
        setColor(index + 1);
        return (
          <li className={`${background}`} key={index}>
            {index + 1}
          </li>
        );
      })}
    </ul>
  );
}
