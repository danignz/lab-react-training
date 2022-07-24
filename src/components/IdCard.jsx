import React from 'react';

export default function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  const birthParsed = birth.toDateString();

  return (
    <div className="card-container">
      <img src={picture} alt="User's pic" />
      <div>
        <p>
          First name: <span>{firstName}</span>
        </p>
        <p>
          Last name: <span>{lastName}</span>
        </p>
        <p>
          Gender: <span>{gender}</span>
        </p>
        <p>
          Height: <span>{height / 100}m</span>
        </p>
        <p>
          Birth: <span>{birthParsed}</span>
        </p>
      </div>
    </div>
  );
}
