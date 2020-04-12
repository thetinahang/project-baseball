import React from "react";

const Dashboard = props => {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <h2>Status: {props.loggedInStatus}</h2>
        <p>You are User {props.user['id']} with email: {props.user['email']}</p>
        <p>Use the menu to get to your products.</p>
      </div>
    </div>
  );
};

export default Dashboard;