import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Main = () => {
  const [apiData, setApiData] = useState('');

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
      console.log(res.data);
      setApiData(res.data);
    });
  }, []);
  return (
    <>
      <div>hi</div>
    </>
  );
};

export default Main;
