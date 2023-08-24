import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./styles.css";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2 className="text-center mt-4 mb-3">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">No items in the cart.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong> - ${item.price}
                  </div>
                  <div>
                    <button
                      className="btn btn-danger btn-sm mr-2"
                      onClick={() => removeFromCart(item)}>
                      Remove
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => increaseQuantity(item)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-2">Quantity: {item.quantity}</div>
              </li>
            ))}
          </ul>
          <p className="total-price">Total Price: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
