// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import'../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
    </div>
  );
};

export default Sidebar;


