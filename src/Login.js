import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isTransparent] = useState(true); // Set to true for transparency

  const handleLogin = () => {
    if (username === 'siva' && password === 'fam') {
      // Both username and password are correct
      window.location.href = '/Mainpage';
    } else {
      setErrorMessage('Incorrect username or password. Please try again.');
    }
  };

  const cardStyle = {
    maxWidth: '300px',
    padding: '50px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: isTransparent ? 'rgba(255, 255, 255, 0.7)' : '#fff', // Adjust alpha value for transparency
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className="login-container">
      <div className="login-card" style={cardStyle}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
