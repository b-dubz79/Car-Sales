import React from 'react';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export default Header;


else if (action.type === 'DECREMENT') {
  return {
      count: state.count -1
      }// add an else if() to this reducer to handle the decrement action
}