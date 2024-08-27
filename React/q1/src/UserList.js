import React, { useState } from 'react';

export default function UserList() {
  const [selectedOption, setSelectedOption] = useState('');
  const [users, setUsers] = useState([]);

  function handleSelection(event) {
    const option = event.target.value;
    setSelectedOption(option);

    if (option === '1') {
      fetch('https://reqres.in/api/users?page=1')
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.data);  
        })
        .catch((error) => console.error('Error fetching data:', error));
    } else {
      setUsers([]);  
    }
    if (option === '2') {
        fetch('https://reqres.in/api/users?page=2')
          .then((response) => response.json())
          .then((data) => {
            setUsers(data.data);  
            })
          .catch((error) => console.error('Error fetching data:', error));
    } else {
        setUsers([]);  
    }
    if (option === '3') {
        fetch('https://reqres.in/api/users?page=3')
          .then((response) => response.json())
          .then((data) => {
            setUsers(data.data); 
        })
          .catch((error) => console.error('Error fetching data:', error));
    } else {
        setUsers([]);  
    }
    if (option === '4') {
        fetch('https://reqres.in/api/users?page=4')
          .then((response) => response.json())
          .then((data) => {
            setUsers(data.data); 
          })
          .catch((error) => console.error('Error fetching data:', error));
    } else {
        setUsers([]);  
    }
  }

  return (
    <div>
      <label htmlFor="user-dropdown">Select an option:</label>
      <select id="user-dropdown" onChange={handleSelection} value={selectedOption}>
        <option value="">--Select--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      {/* Display the fetched users if available */}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.first_name} {user.last_name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
