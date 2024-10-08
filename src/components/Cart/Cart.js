import React, { useState } from "react";
import PaymentPopup from "../PaymentPopup/PaymentPopup";
const Cart = ({ cartItems }) => {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const togglePaymentPopup = () => {
    setShowPaymentPopup(!showPaymentPopup);
  };
  
  return (
    <div>
      <h1>Giỏ hàng</h1>
      {cartItems.length > 0 ? (
        <div>
          <p>Giỏ hàng có {cartItems.length} sản phẩm.</p>
          <button onClick={togglePaymentPopup}>Thanh toán</button>
          {/* Nút thanh toán */}
          
        </div>
      ) : (
        <p>Giỏ hàng trống.</p>
      )}

      {showPaymentPopup && (
        <PaymentPopup onClose={togglePaymentPopup} /> // Hiển thị popup thanh toán
      )}
    </div>
  );
};

export default Cart;
