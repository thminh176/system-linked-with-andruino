import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate, // Import useNavigate
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import LoginPopup from "./components/Login/LoginPopup";
import './App.scss'

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Trạng thái đăng nhập admin
  const navigate = useNavigate(); // Khai báo useNavigate

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const showLogin = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const handleAdminLogin = (credentials) => {
    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      setIsAdminLoggedIn(true);
      closeLoginPopup();
      navigate("/admin"); // Chuyển hướng đến trang admin
    }
  };

  return (
    <div className={isDarkMode ? "app dark-mode" : "app"}>
      <Header
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        showLogin={showLogin}
      />
      {showLoginPopup && (
        <LoginPopup closePopup={closeLoginPopup} onLogin={handleAdminLogin} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Điều hướng đến admin nếu đã đăng nhập */}
        <Route
          path="/admin"
          element={isAdminLoggedIn ? <Admin /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
