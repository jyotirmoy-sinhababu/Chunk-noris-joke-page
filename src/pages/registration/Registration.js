import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './registration.css';

const Registration = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handelSubmit = (e) => {
    localStorage.setItem('data', JSON.stringify(data));
  };

  return (
    <div className='form-container'>
      <div className='heading'>Register as an user</div>
      <form
        className='form-section'
        onSubmit={(e) => {
          e.preventDefault();
          handelSubmit(e);
        }}
      >
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder='Enter your name'
          type='txt'
          name='name'
          className='reg-frm-inp'
        />

        <input
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder='Enter your email'
          type='email'
          name='email'
          className='reg-frm-inp'
        />

        <input
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder='Enter password'
          type='password'
          name='password'
          className='reg-frm-inp'
        />
        <div className='form-btn-cnt'>
          <NavLink to='/login' className='login-btn'>
            LogIN
          </NavLink>
          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
