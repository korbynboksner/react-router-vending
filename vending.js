import React from 'react';
import { Link, Route } from 'react-router-dom';
import Snack from './snack';

const VendingMachine = () => {
  return (
    <div>
      <h1>Welcome to the Vending Machine!</h1>
      <ul>
        <li>
          <Link to="/snack/chips">Chips</Link>
        </li>
        <li>
          <Link to="/snack/candy">Candy</Link>
        </li>
        <li>
          <Link to="/snack/soda">Soda</Link>
        </li>
      </ul>

      <Route path="/snack/:snackType" component={Snack} />
    </div>
  );
};

export default VendingMachine;