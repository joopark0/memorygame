import React from 'react';
import meep from '../images/meep.jpeg';

const Card = (props) => {
  const { charClick } = props;
  return (
    <div className="card" onClick={charClick}>
      <img src={meep} alt="" />
    </div>
  );
};

export default Card;
