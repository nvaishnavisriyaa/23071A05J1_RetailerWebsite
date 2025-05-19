
import React from 'react';

function Invoice() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Invoice</h2>
      {cart.map((item, i) => (
        <div key={i}>
          <p>{item.name} - ₹{item.price}</p>
        </div>
      ))}
      <h3>Total Paid: ₹{total}</h3>
    </div>
  );
}

export default Invoice;
