import React from "react";
import ProductList from '../containers/ProductList';

const Dashboard = props => {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <h2>Status: {props.loggedInStatus}</h2>
        <p>You are User {props.user['id']} with email: {props.user['email']}</p>
      </div>
      <ProductList />
    </div>
  );
};

export default Dashboard;