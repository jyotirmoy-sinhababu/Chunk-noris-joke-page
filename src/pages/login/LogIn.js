import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LogIn = () => {
  const navigate = useNavigate();

  const registeredData = JSON.parse(localStorage.getItem('data'));

  const [loginData, setLoginData] = useState({});

  const loginInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: [e.target.value] });
  };

  const logInVerification = (e) => {
    if (Object.keys(loginData).length == 2) {
      if (
        loginData.email === registeredData.email &&
        loginData.password === registeredData.password
      ) {
      }
    }
  };

  return (
    <div className='login-container'>
      <h3>log in</h3>
      <form
        className='login-section'
        onSubmit={(e) => {
          e.preventDefault();
          logInVerification(e);
        }}
      >
        <input
          onChange={(e) => {
            loginInput(e);
          }}
          placeholder='Enter your email'
          type='email'
          name='email'
          className='login-formInp'
        />
        <input
          onChange={(e) => {
            loginInput(e);
          }}
          placeholder='Enter password'
          type='password'
          name='password'
          className='login-formInp'
        />
        <div className='login-btn-cnt'>
          <NavLink to='/reg' className='signup-btn'>
            Sign-up
          </NavLink>
          <button className='log-btn'>LogIn</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
