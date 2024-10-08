import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.scss';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ JSON Server
    axios.get('http://localhost:5000/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      <h2>Danh mục sản phẩm</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.price} VND</p>
              <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
