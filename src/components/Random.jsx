import React from 'react';

export default function Random(props) {
  const { min, max } = props;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="card-container">
      <p>
        Random value between {min} and {max} =&gt; {randomNum}
      </p>
    </div>
  );
}
