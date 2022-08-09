import React from 'react';

export default function Rating(props) {
  const { children } = props;
  const parseChildren = Math.round(parseFloat(children));

  const starTemplate = ['☆', '☆', '☆', '☆', '☆'];

  for (let i = 0; i < parseChildren; i++) {
    starTemplate[i] = '★';
  }

  // let starTemplate = '';
  // switch (true) {
  //   case parseChildren < 1:
  //     starTemplate = '☆ ☆ ☆ ☆ ☆';
  //     break;
  //   case 1 <= parseChildren && parseChildren < 2:
  //     starTemplate = '★ ☆ ☆ ☆ ☆';
  //     break;
  //   case 2 <= parseChildren && parseChildren < 3:
  //     starTemplate = '★ ★ ☆ ☆ ☆';
  //     break;
  //   case 3 <= parseChildren && parseChildren < 4:
  //     starTemplate = '★ ★ ★ ☆ ☆';
  //     break;
  //   case 4 <= parseChildren && parseChildren < 5:
  //     starTemplate = '★ ★ ★ ★ ☆';
  //     break;
  //   case 5 <= parseChildren:
  //     starTemplate = '★ ★ ★ ★ ★';
  //     break;
  //   default:
  // }

  return <p>{starTemplate}</p>;
}
