import React, { useState } from 'react';

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState('Likes');
  const [color, setColor] = useState('purple');
  const arrColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    //0 instead 1 because state doesnt update instantly we would need useEffect hook to improve better solution
    setWord(count === 0 ? 'Like' : 'Likes');
    let newColor = arrColors.indexOf(color) + 1;
    //if we go through all the colors we start again
    if (newColor >= arrColors.length) {
      newColor = 0;
    }
    setColor(arrColors[newColor]);
  };

  const divStyle = {
    backgroundColor: `${color}`,
  };

  return (
    <button className="like-btn" style={divStyle} onClick={handleIncrement}>
      {count} {word}
    </button>
  );
}
