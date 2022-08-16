import React, { useState } from 'react';

export default function SignupPage(props) {
  const { newSignUp } = props;

  const [user, setUser] = useState({
    email: '',
    password: '',
    nationality: '',
  });

  const [passwordIsValid, setPassword] = useState(false);
  const [emailIsValid, setEmail] = useState(false);

  const handleEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      setEmail(false);
    } else {
      setEmail(true);
    }
  };

  const handlePassword = (password) => {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(password)) {
      setPassword(false);
    } else {
      setPassword(true);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      handleEmail(e.target.value);
    }

    if (e.target.name === 'password') {
      handlePassword(e.target.value);
    }

    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (passwordIsValid && emailIsValid) {
      newSignUp(user, true);
      setUser({
        email: '',
        password: '',
        nationality: '',
      });
    } else {
      alert('Cannot login!! Check email and password requirements');
    }
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
        {user.email.length >= 1 &&
          (emailIsValid ? (
            <p style={{ color: 'green' }}>You typed a valid email</p>
          ) : (
            <p style={{ color: 'red' }}>You typed a invalid email</p>
          ))}
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        {user.password.length >= 1 &&
          (passwordIsValid ? (
            <p style={{ color: 'green' }}>You typed a strong password</p>
          ) : (
            <p style={{ color: 'red' }}>Your password is too weak</p>
          ))}
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
