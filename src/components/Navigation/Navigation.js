import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/inventory">Quản lý kho</Link></li>
        <li><Link to="/admin">Trang Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
