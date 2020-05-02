import React from "react";
import { Link } from 'react-router-dom';

const Dashboard = props => {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <h2>Status: {props.loggedInStatus}</h2>
        <p>You are User {props.user['id']} with email: {props.user['email']}</p>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
};

export default Dashboard;