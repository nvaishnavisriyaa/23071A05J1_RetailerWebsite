import React, { useEffect } from 'react';
import './Catalogue.css';

const products = [
  { id: 1, name: 'Samsung Phone', price: 29999 },
  { id: 2, name: 'HP Laptop', price: 79999 },
  { id: 3, name: 'Vivo Phone', price: 29999 },
  { id: 4, name: 'Dell Laptop', price: 79999 },
  { id: 5, name: 'Apple Phone', price: 89999 },
];

function Catalogue() {
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedInUser");
    if (loggedIn !== "true") {
      alert("Please login to view catalogue");
      window.location.href = "/login";
    }
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="catalogue-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Catalogue;
