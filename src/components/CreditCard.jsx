import React from 'react';
import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.svg';

export default function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const tipeImg = (type) => (type === 'Visa' ? visa : masterCard);

  const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  const last4Digits = number.slice(12, 16);
  let expYear = String(expirationYear).slice(2, 4);

  const exMonth = (expirationMonth) => {
    return String(expirationMonth).length === 1
      ? '0' + expirationMonth
      : String(expirationMonth);
  };

  return (
    <div className="CreditCard" style={divStyle}>
      <div className="type">
        <img src={tipeImg(type)} alt="Pic of Credit Card" />
      </div>

      <div className="number">•••• •••• •••• {last4Digits}</div>

      <div>
        <span>
          Expires {exMonth(expirationMonth)}/{expYear}
        </span>
        <span className="bank">{bank}</span>
      </div>

      <div>
        <span>{owner}</span>
      </div>
    </div>
  );
}
