import React from "react";
import { useState } from "react";

export default function Item({ item, onItemCheck, onDeleteItem }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDoneClick() {
    onItemCheck({ ...item, isChecked: !item.isChecked });
  }

  function handleDeleteItem() {
    onDeleteItem(item.id);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick(e) {
    e.preventDefault();
    const updatedItem = { ...item, name: e.target.name.value };
    onItemCheck(updatedItem);
    setIsEditing(false);
  }

  function handleCancelClick() {
    setIsEditing(false);
  }

  const strikethrough = {
    textDecoration: item.isChecked ? "line-through" : "none",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        border: "solid black 1px",
        marginTop: "10px",
        width: "40%",
      }}
    >
      {!isEditing && (
        <>
          <h5 style={{ marginLeft: "5px", marginRight: "5px" }}>
            {item.quantity}
          </h5>
          <h5
            style={{ marginLeft: "5px", marginRight: "5px", ...strikethrough }}
          >
            {item.name}
          </h5>
          <button
            onClick={handleDeleteItem}
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            Delete
          </button>
          <button
            onClick={handleDoneClick}
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            Done
          </button>
          <button
            onClick={handleEditClick}
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            Edit
          </button>
        </>
      )}
      {isEditing && (
        <form onSubmit={handleSaveClick}>
          <input type="text" name="name" defaultValue={item.name} />
          <button type="submit">Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </form>
      )}
    </div>
  );
}
