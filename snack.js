import React from 'react';
import { Link } from 'react-router-dom';

const Snack = ({ match }) => {
  const { snackType } = match.params;

  return (
    <div>
      <h2>{snackType}</h2>
      <p>Description and details about the {snackType} snack.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack;