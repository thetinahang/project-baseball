import React, { Component } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
 
export default class Logout extends Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        });
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div>
        <NavLink to="/logout" exact>
          <MenuItem>Logout</MenuItem>
        </NavLink>
      </div>
    );
  }
}
