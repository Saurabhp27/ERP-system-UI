// ProductsManagement.js
import React, { useContext, useState } from 'react';
import '../styles/ProductsManagement.css';
import { useGlobal } from '../Contextprovider/Globalcontext';

const ProductsManagement = () => {

  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', category: 'Computers', price: 50999.99, stockQuantity: 20 },
    { id: 2, name: 'Smartphone', category: 'Mobile Devices', price: 11699.99, stockQuantity: 50 },
    { id: 3, name: 'Smart TV', category: 'Televisions', price: 77799.99, stockQuantity: 30 },
    { id: 4, name: 'Headphones', category: 'Audio', price: 1779.99, stockQuantity: 100 },
    { id: 5, name: 'Digital Camera', category: 'Cameras', price: 33399.99, stockQuantity: 15 },
  ]);

  const context = useGlobal();
  context.setproductcount(products.length);

  console.log(context.productcount)


  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0, stockQuantity: 0 });

  const handleAddProduct = () => {
    setProducts(prevProducts => [...prevProducts, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: '', category: '', price: 0, stockQuantity: 0 });
  };

 

  const handleDeleteProduct = productId => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  


  return (
    <div className="products-management-container">
      <h1>Manage Products</h1>
      <div>
        <h2>Add Product</h2>
        <label>Name:</label>
        <input type="text" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
        <label>Category:</label>
        <input type="text" value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })} />
        <label>Price:</label>
        <input type="number" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 })} />
        <label>Stock Quantity:</label>
        <input type="number" value={newProduct.stockQuantity} onChange={e => setNewProduct({ ...newProduct, stockQuantity: parseInt(e.target.value) || 0 })} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <br/>
      
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsManagement;
