import React from "react";

export default function ReactionsLayer({ reactions }) {
  return (
    <div style={{ position: "fixed", width: "100%", height: "100%", pointerEvents: "none" }}>
      {reactions.map((r) => (
        <span
          key={r.id}
          style={{
            position: "absolute",
            left: "50%",
            bottom: `${r.y}%`,
            transform: "translateX(-50%)",
            fontSize: "28px",
            animation: "rise 3s linear forwards",
          }}
        >
          {r.emoji}
        </span>
      ))}

      <style>
        {`
          @keyframes rise {
            0% { bottom: 10%; opacity: 1; }
            100% { bottom: 90%; opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
