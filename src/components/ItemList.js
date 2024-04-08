import React from "react";
import Item from "./Item";

export default function ItemList({
  items,
  onItemCheck,
  onDeleteItem,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onItemCheck={onItemCheck}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}
