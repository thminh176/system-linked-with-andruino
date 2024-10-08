import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  
  // Hàm để gọi API lấy dữ liệu sản phẩm
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products'); // Thay đổi URL nếu cần
      setProducts(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handlePayment = () => {
    // Chuyển hướng tới trang thanh toán
    window.location.href = '/payment'; // Có thể sử dụng useNavigate từ react-router-dom thay thế
  };

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Giá: {product.price} VNĐ</p>
            <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
          </div>
        ))
      ) : (
        <p>Đang tải sản phẩm...</p>
      )}
      <button onClick={handlePayment}>Thanh toán</button>
    </div>
  );
};

export default Home;
