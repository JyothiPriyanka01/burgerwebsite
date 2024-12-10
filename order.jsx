import React from "react";

const OrderSummary = ({ totalPrice, onPlaceOrder }) => {
  return (
    <div>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={onPlaceOrder} disabled={totalPrice === 0}>
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
