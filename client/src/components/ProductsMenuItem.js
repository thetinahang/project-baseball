import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

export default function ProductsMenuItem() {

  return (
    <div>
      <NavLink to="/products" exact>
        <MenuItem>Products</MenuItem>
      </NavLink>
    </div>
  );
}
