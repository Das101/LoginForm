import React, { useState } from 'react';

const LoginPage = () => {
  // State to store user input 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // You can add your authentication logic here
    // For a simple example, let's just print the username and password
    console.log('Username:', username);
    console.log('Password:', password);

    
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
       <div className="form-group">
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
