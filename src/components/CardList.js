import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cards = robots.map((robot, index) =>
    (
      <Card
        key={index}
        id={robots[index].id}
        name={robots[index].name}
        email={robots[index].email} />
    )
  );
  return (
    <div>
      {cards}
    </div>
  );
};

export default CardList;