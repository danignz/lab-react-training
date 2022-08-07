import React from 'react';
import profiles from '../data/berlin.json';

export default function FaceBook() {
  const typeOfUser = (userType) => {
    return userType === true ? 'Student' : 'Teacher';
  };

  return (
    <div>
      {profiles.map((user, index) => {
        return (
          <div className="card-container" key={index}>
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
