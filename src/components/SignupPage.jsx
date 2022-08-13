import React, { useState } from 'react';

export default function SignupPage(props) {
  const { newSignUp } = props;

  const [user, setUser] = useState({
    email: '',
    password: '',
    nationality: '',
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    newSignUp(user, true);

    setUser({
      email: '',
      password: '',
      nationality: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <label>Nationality</label>
        <select
          value={user.nationality}
          name="nationality"
          onChange={(e) => handleChange(e)}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
