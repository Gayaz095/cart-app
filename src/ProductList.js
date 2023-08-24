import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./styles.css";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
  ];

  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
  };
  return (
    <>
      <div className="product-list-container">
        <h2 className="product-list-title">Product List</h2>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            {addedToCart[product.id] ? (
              <p>Added to Cart</p>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(product)}>
                {addedToCart[product.id] ? "Added to Cart" : "Add to Cart"}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="to-cart">
        <Link to="/cart">Go to Cart</Link>
      </div>
    </>
  );
};

export default ProductList;
