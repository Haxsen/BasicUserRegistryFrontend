import React, { useState } from 'react';
import axios from 'axios';

const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://localhost:7069/api/users/register', { username });
      setSuccessMessage('User registered successfully!');
      console.log('User registered successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <button type="submit">Register</button>
      {successMessage ? <p>{successMessage}</p> : <p>Error registering user</p>}
    </form>
  );
};

export default RegisterUser;