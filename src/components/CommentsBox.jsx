import React, { useState } from "react";
import EmojiPicker from "./EmojiPicker";

export default function CommentsBox({
  comments,
  commentText,
  setCommentText,
  sendComment,
  addReaction,
}) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div
      style={{
        width: "340px",
        marginLeft: "50px",
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Comments</h2>

      <div style={{ flex: 1, overflowY: "auto", marginBottom: "10px" }}>
        {comments.length === 0 ? (
          <div style={{ textAlign: "center", color: "#aaa" }}>No comments yet</div>
        ) : (
          comments.map((c, i) => (
            <div
              key={i}
              style={{
                background: "#f5f5f7",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            >
              <div>{c.text}</div>
              <small style={{ color: "#888" }}>{c.timestamp}</small>
            </div>
          ))
        )}
      </div>

      {showPicker && <EmojiPicker addReaction={addReaction} />}

      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{ fontSize: "24px", cursor: "pointer", marginRight: "10px" }}
          onClick={() => setShowPicker(!showPicker)}
        >
          😊
        </span>

        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        <button
          onClick={() => {
            if (commentText.trim()) {
              sendComment({ text: commentText, timestamp: new Date().toISOString() });
              setCommentText("");
            }
          }}
          style={{ borderRadius:'5px',padding: "8px 15px", marginLeft: "10px", background: "#4CAF50", color: "white",border:"none" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
