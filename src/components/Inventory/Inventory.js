import React from 'react';
import './Inventory.scss';
import data from '../../data.json';

const Inventory = () => {
  return (
    <div className="inventory">
      <h2>Quản lý kho</h2>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price.toLocaleString()} VND
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
