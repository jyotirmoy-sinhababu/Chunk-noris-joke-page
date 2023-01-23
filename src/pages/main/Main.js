import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

import Card from '../../components/card/Card';
import Nav from '../../components/nav/Nav';

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
      <div>
        <Nav />
      </div>
      <div>
        <Card apiData={apiData} />
      </div>
    </>
  );
};

export default Main;
