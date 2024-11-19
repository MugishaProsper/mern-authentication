import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        email: userData.email,
        password: userData.password
      });
      console.log(response.data); // Handle successful registration
    } catch (error) {
      console.error(error.response.data); // Handle registration error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
        <input type="text" name="firstName" placeholder='First Name' value={userData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder='Last Name' value={userData.lastName} onChange={handleChange} />
        <input type="text" name="username" placeholder='Username' value={userData.username} onChange={handleChange} />
        <input type="email" name="email" placeholder='Email' value={userData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder='Password' value={userData.password} onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder='Confirm Password' value={userData.confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit" className='border p-4'>Register</button>
      </form>
    </div>
  );
}

export default Signup;