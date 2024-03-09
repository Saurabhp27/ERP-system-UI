import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../styles/Dashboard.css'

import { useGlobal } from '../Contextprovider/Globalcontext';

const Dashboard = () => {

  const context = useGlobal();

  return (
    <div className="content">
      <div className="dashboard-summary">
      <h1>Dashboard</h1>
        {/* Display key metrics */}
        <div className="metrics">
          <div className="metric">
            <h2>Total Products</h2>
            <p>{context.productcount}</p>
            <br/>

          <div className="navigation-links">
          <Link to="/products" className="navigation-button" >
            Manage Products
          </Link>
        </div>

          </div>
          
        
          <div className="metric">
            <h2>Total Orders</h2>
            <p>{context.ordercount}</p>

            <br/>

            <div className="navigation-links">
          <Link to="/orders" className="navigation-button">
            Manage Orders
          </Link>
        </div>
          </div>
        </div>
       
      </div>

    </div>
  

);
};

export default Dashboard;