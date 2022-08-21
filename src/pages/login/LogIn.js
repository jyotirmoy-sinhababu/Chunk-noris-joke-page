import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
      <form
        className='login-section'
        onSubmit={(e) => {
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
          <button className='login-btn'>LogIn</button>
          <NavLink to='/reg' className='signup-btn'>
            Sign-up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
