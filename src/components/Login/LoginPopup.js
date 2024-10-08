import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPopup.scss";

const LoginPopup = ({ closePopup, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Đặt useNavigate ở đây

  const handleLogin = () => {
    const credentials = { username, password };
    onLogin(credentials);

    // Nếu thông tin đăng nhập hợp lệ, điều hướng đến trang admin
    if (username === "admin" && password === "admin123") {
      navigate("/admin"); // Điều hướng tới trang /admin sau khi đăng nhập thành công
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <h2>Đăng nhập</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Đăng nhập</button>
        <button onClick={closePopup}>Đóng</button>
      </div>
    </div>
  );
};

export default LoginPopup;
