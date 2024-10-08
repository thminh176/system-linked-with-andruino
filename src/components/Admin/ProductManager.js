import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:5000/products'); // Lấy dữ liệu từ JSON Server
    setProducts(response.data);
  };

  const handleAddProduct = async () => {
    if (newProduct.name && newProduct.price) {
      await axios.post('http://localhost:5000/products', newProduct);
      setNewProduct({ name: '', price: '' });
      fetchProducts(); // Refresh danh sách sản phẩm
    }
  };

  const handleDeleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="product-manager">
      <h2>Quản lý sản phẩm</h2>
      <div>
        <input 
          type="text" 
          placeholder="Tên sản phẩm" 
          value={newProduct.name} 
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
        />
        <input 
          type="number" 
          placeholder="Giá sản phẩm" 
          value={newProduct.price} 
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
        />
        <button onClick={handleAddProduct}>Thêm sản phẩm</button>
      </div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}₫
            <button onClick={() => handleDeleteProduct(product.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManager;
