import React from 'react';

export default function Greetings(props) {
  const { lang, children } = props;

  let greeting = '';

  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
  }

  return (
    <div className="card-container">
      <p>
        {greeting} {children}
      </p>
    </div>
  );
}
