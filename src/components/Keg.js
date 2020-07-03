import React from 'react';
import PropTypes from 'prop-types';

funtion Keg(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h4>{props.brewery}</h4>
      <h5>{props.description}</h5>
      <h4>{props.abv}</h4>
      <h4>{props.price}</h4>
      <h5>{props.quantity}</h5>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
}

export default Keg;