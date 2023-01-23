import React from 'react';

const Card = ({ apiData }) => {
  return (
    <>
      <div>
        <h1>{apiData.value}</h1>
      </div>
    </>
  );
};

export default Card;
