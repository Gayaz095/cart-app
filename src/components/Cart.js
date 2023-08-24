import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  return (
    <div className="container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center">
              {item.name} - Quantity: {item.quantity}
              <div>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
