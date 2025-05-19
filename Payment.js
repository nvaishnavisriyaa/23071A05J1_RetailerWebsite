
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment Successful");
    navigate("/invoice");
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
