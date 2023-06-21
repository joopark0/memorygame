import React from 'react';
import meep from '../images/meep.jpeg';

const Card = (props) => {
  const { charClick, character } = props;
  return (
    <div className="card" onClick={() => charClick(character)}>
      <img src={character} alt="" />
    </div>
  );
};

export default Card;
