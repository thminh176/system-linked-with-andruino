import React from "react";

const Payment = ({ cartItems }) => {
  if (!cartItems || cartItems.length === 0) {
    return <div>Giỏ hàng trống!</div>;
  }

  return (
    <div>
      <h2>Thanh toán</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} VNĐ
          </li>
        ))}
      </ul>
      <h3>
        Tổng cộng: {cartItems.reduce((total, item) => total + item.price, 0)}{" "}
        VNĐ
      </h3>
      {/* Thêm phần thanh toán tại đây */}
    </div>
  );
};

export default Payment;
