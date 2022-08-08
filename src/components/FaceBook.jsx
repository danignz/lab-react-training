import React, { useState } from 'react';
import profiles from '../data/berlin.json';

export default function FaceBook() {
  const [profilesData, setProfiles] = useState(profiles);

  const typeOfUser = (userType) => {
    return userType === true ? 'Student' : 'Teacher';
  };

  const uniqueCountries = [];

  profiles.forEach((member) => {
    if (member.isStudent) {
      const isDuplicate = uniqueCountries.includes(member.country);
      if (!isDuplicate) {
        uniqueCountries.push(member.country);
      }
    }
  });

  const handleSelection = (country) => {
    const profilesSelected = profiles.map((profile) => {
      let isSelected;
      if (country === 'All' && profile.isStudent) {
        isSelected = true;
      } else {
        isSelected =
          country === profile.country && profile.isStudent ? true : false;
      }

      return {
        ...profile,
        selected: isSelected,
      };
    });
    setProfiles(profilesSelected);
  };

  return (
    <div>
      <div id="countryBtn">
        <button onClick={() => handleSelection('All')}>All</button>
        {uniqueCountries.map((country) => (
          <button onClick={() => handleSelection(country)} key={country}>
            {country}
          </button>
        ))}
      </div>

      {profilesData.map((user, index) => {
        return (
          <div
            className={`card-container ${user.selected ? 'blue' : 'white'}`}
            key={index}
          >
            <img
              width="150px"
              src={user.img}
              alt={`${user.firstName} ${user.lastName} photography`}
            />
            <div>
              <p>
                <strong>First name:</strong>
                <span>{user.firstName}</span>
              </p>
              <p>
                <strong>Last name:</strong>
                <span>{user.lastName}</span>
              </p>
              <p>
                <strong>Country:</strong>
                <span>{user.country}</span>
              </p>
              <p>
                <strong>Type:</strong>
                <span>{typeOfUser(user.isStudent)}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
