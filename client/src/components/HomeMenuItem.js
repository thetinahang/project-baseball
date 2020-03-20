import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

export default function HomeMenuItem() {

  return (
    <div>
      <NavLink to="/" exact>
        <MenuItem>Home</MenuItem>
      </NavLink>
    </div>
  );
}
