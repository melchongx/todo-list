import React from "react";
import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newItem = { name, quantity, isChecked: false, id: name };

    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <form onSubmit={handleSubmit}>
          <select
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
            name="qty"
          >
            {Array.from({ length: 1000 }, (_, i) => i + 1).map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add an item..."
          ></input>
          <button type="submit">Got it!</button>
        </form>
      </div>
    </div>
  );
}
