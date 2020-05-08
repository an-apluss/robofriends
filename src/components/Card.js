import React from 'react';

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img className="br-100 bg-lightest-blue" src={`https://robohash.org/${id}?size=200x200`} alt='robot' width="70%" />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;