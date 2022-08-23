import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Main = () => {
  const [firstPost, setFirstPost] = useState('');

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
      console.log(res.data);
      setFirstPost(res.data.value);
    });
  }, []);
  return (
    <>
      {firstPost ? (
        <div className='main-container'>
          <div>{firstPost}</div>
        </div>
      ) : (
        'No data'
      )}
    </>
  );
};

export default Main;
