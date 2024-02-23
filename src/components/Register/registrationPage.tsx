import React, { useState } from 'react';
import './registrationPage.scss';
import { useThemeStore } from '../../storage/ThemeStore';

const Register = () => {
  const { darkMode } = useThemeStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');

    window.location.href = '/';
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`register ${darkMode ? 'dark-mode' : ''}`}
    >
      <h1 className="register__title">Sign Up</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={!email || !password}>
        Sign up
      </button>
    </form>
  );
};

export default Register;
