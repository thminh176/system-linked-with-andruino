import React from "react";
import "./PaymentPopup.scss";

const PaymentPopup = ({ onClose }) => {
  return (
    <div className="payment-popup">
      <h2>Thanh toán</h2>
      <p>Vui lòng chọn phương thức thanh toán.</p>
      {/* Các lựa chọn thanh toán */}
      <button onClick={onClose}>Đóng</button>
    </div>
  );
};

export default PaymentPopup;
