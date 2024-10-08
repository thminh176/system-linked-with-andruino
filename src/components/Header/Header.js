import React from "react";
import "./Header.scss";
import { IoPersonSharp } from "react-icons/io5";

const Header = ({ toggleDarkMode, isDarkMode, showLogin }) => {
  return (
    <header className="header">
      <h1>To Den POS</h1>
      <div className="controls">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={showLogin} className="login-btn glow-on-hover">
          <IoPersonSharp />
        </button>
      </div>
    </header>
  );
};

export default Header;
