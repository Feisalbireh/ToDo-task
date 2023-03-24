import React, { useState } from 'react';
import axios from 'axios';
import '../css/Login.css'

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('/login', {
      username: usernameOrEmail,
      email: usernameOrEmail,
      password: password,
    })
      .then(response => {
        // Handle successful login
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <h2 className="form-title">Login</h2>
      {error && <p className="form-error">{error}</p>}
      <div className="form-group">
        <label htmlFor="username-or-email" className="form-label">Username or Email</label>
        <input
          type="text"
          id="username-or-email"
          className="form-input"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="form-button">Login</button>
    </form>
  );
}

export default Login;
