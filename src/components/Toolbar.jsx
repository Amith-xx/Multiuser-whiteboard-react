import React from "react";

export default function Toolbar({ color, setColor, eraseCanvas, exportImage }) {
  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: "40px", height: "40px", cursor: "pointer", borderRadius: "5px" }}
      />

      <button
        onClick={eraseCanvas}
        style={{ padding: "8px 12px", background: "#e74c3c", color: "white", borderRadius: "6px" }}
      >
        Erase
      </button>

      <button
        onClick={exportImage}
        style={{ padding: "8px 12px", background: "#27ae60", color: "white", borderRadius: "6px" }}
      >
        Export
      </button>
    </div>
  );
}
