import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
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
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: userData.email,
        password: userData.password
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
        <input type="email" name="email" placeholder='Email' value={userData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder='Password' value={userData.password} onChange={handleChange} />
        </div>
        <button type="submit" className='border p-4'>Login</button>
      </form>
    </div>
  );
}

export default Login;