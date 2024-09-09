import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LatestUsers = () => {
  const [users, setUsers] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://localhost:7069/api/users/latest');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        setSuccessMessage('Error fetching users');
      }
    };
    fetchUsers();
  }, []);

  return (
    !successMessage ? (
        <ul>
            {users.map((user) => (
            <li key={user.id}>{user.username}</li>
            ))}
        </ul>
     ) : (
        <p>{successMessage}</p>
     )
  );
};

export default LatestUsers;