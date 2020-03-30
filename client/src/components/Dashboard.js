import React from "react";
import ProductList from '../containers/ProductList';

const Dashboard = props => {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <h1>Status: {props.loggedInStatus}</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default Dashboard;