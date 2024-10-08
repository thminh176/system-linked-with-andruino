import React, { useState } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import PaymentPopup from "./components/Payment/PaymentPopup";
import "./App.scss";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showPayment, setShowPayment] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const showLogin = () => {
    setIsAuthenticated(true);
  };

  const closePayment = () => {
    setShowPayment(false);
  };

  return (
    <div className={isDarkMode ? "app dark-mode" : "app"}>
      <Header
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        showLogin={showLogin}
      />
      <div className="main-content">
        <ProductList addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          showPayment={() => setShowPayment(true)}
        />
      </div>
      {showPayment && (
        <PaymentPopup
          totalAmount={cartItems.reduce((acc, item) => acc + item.price, 0)}
          closePayment={closePayment}
        />
      )}
    </div>
  );
}

export default App;
