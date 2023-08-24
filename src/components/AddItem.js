import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const { addItem } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName);
    setItemName("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Item Name"
          />
          <button type="submit" className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
