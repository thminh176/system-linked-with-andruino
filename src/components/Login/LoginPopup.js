import React, { useState } from "react";
import "./LoginPopup.scss";

const LoginPopup = ({ closePopup, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin({ username, password }); // Gọi hàm login
  };

  return (
    <div className="login-popup">
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Đăng Nhập</button>
      </form>
      <button onClick={closePopup}>Đóng</button>
    </div>
  );
};

export default LoginPopup;
