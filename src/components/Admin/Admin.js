import React, { useState } from "react";
import "./Admin.scss";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: "", price: "", image: "" });
    setNotification([
      ...notification,
      `Thêm sản phẩm ${newProduct.name} thành công!`,
    ]);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    setNotification([
      ...notification,
      `Đã xóa sản phẩm ${products[index].name}!`,
    ]);
  };

  const handleClearNotifications = () => {
    setNotification([]);
  };

  return (
    <div className="admin-page">
      <h1>Quản lý Sản phẩm</h1>
      <div className="notifications">
        <h2>Thông báo</h2>
        <button onClick={handleClearNotifications}>Xóa thông báo</button>
        {notification.map((msg, index) => (
          <div key={index} className="notification-item">
            {msg}
          </div>
        ))}
      </div>
      <div className="add-product">
        <h2>Thêm sản phẩm</h2>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Giá sản phẩm"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="URL hình ảnh"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <button onClick={handleAddProduct}>Thêm sản phẩm</button>
      </div>
      <h2>Danh sách sản phẩm</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Giá: {product.price} VNĐ</p>
            <button onClick={() => handleDeleteProduct(index)}>Xóa</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
