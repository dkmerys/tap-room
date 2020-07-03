import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingBuy, onClickingReplace } = props;
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name}</h3>
      <h3>{keg.brewery}</h3>
      <h3>{keg.description}</h3>
      <h3>{keg.abv}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.quantity}</h3>
      <button onClick = {props.onClickingEdit}>Update Keg</button>
      <button onClick = {() => onClickingDelete(keg.id)}>Remove Keg</button>
      <button onClick = {() => onClickingBuy(keg.id)}>Pour Pint</button>
      <button onClick = {() => onClickingReplace(keg.id)}>Replace Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingReplace: PropTypes.func
};

export default KegDetail;