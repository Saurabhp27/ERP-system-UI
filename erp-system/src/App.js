import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Products from './components/ProductsManagement';
import Sidebar from './components/sidebar';
import OrderList from './components/OrderList';
import ContextProvider from './Contextprovider/Globalcontext';


const App = () => {
  return (
    <ContextProvider>
    <Router>
      <div style={{ display: 'flex' }}></div>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '20px' }}></div>
      <Routes>
        <Route path="/"  element={<Dashboard />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/orders" element={<OrderList/>} />
        </Routes>
    </Router>
    </ContextProvider>
  );
};

export default App;