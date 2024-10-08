import React, { useState, useEffect } from "react";
import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Lấy dữ liệu sản phẩm từ json-server
  useEffect(() => {
    fetch("http://localhost:5000/products") // Đường dẫn tới json-server
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="home-page">
      <div className="product-list">
        <h2>Sản phẩm</h2>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Giá: {product.price.toLocaleString("vi-VN")} VND</p>
              <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
            </div>
          ))
        ) : (
          <p>Không có sản phẩm nào.</p>
        )}
      </div>

      <div className="cart">
        <h2>Giỏ hàng</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>
                {item.name} - {item.price.toLocaleString("vi-VN")} VND
              </p>
            </div>
          ))
        ) : (
          <p>Giỏ hàng trống.</p>
        )}
        <button className="checkout-btn">Thanh toán</button>
      </div>
    </div>
  );
};

export default Home;
