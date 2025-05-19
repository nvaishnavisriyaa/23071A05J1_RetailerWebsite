
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav>
      <div>
        <Link to="/catalogue">Catalogue</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/payment">Payment</Link> |{" "}
        <Link to="/invoice">Invoice</Link>
      </div>
      <div className="cart-link">
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </nav>
  );
}

export default Header;
