import React, { useContext, useState } from 'react';
// OrderList.js
import '../styles/OrderList.css'
import ContextProvider, { useGlobal } from '../Contextprovider/Globalcontext';


const OrderList = () => {
    // Mock data for orders
    const orders = [
        { id: 1, customerName: 'Raj Patel', orderDate: '2024-03-09', status: 'Pending' },
        { id: 2, customerName: 'Nayan Deshmukh', orderDate: '2024-03-14', status: 'Shipped' },
        { id: 3, customerName: 'Jayesh Shah', orderDate: '2024-03-20', status: 'Shipped' },
        { id: 4, customerName: 'Jane Doe', orderDate: '2024-03-22', status: 'pending' }
    ];


    const context = useGlobal();
    context.setordercount(orders.length)
    

    return (
        <div className="order-list-container">  
            <h1>Order List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
