import React from "react";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <h1
        style={{
          fontFamily: "monospace",
          fontSize: "6em",
          marginTop: "20px",
          marginBottom: "5px",
        }}
      >
        Just Get It
      </h1>
      <h2 style={{ fontFamily: "monospace", fontSize: "3em" }}>Grocery List</h2>
    </div>
  );
}
