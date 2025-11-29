export default function EmojiPicker({ addReaction }) {
  const emojis = ["😀","😂","😍","😎","😢","😡","👍","🙏"];

  return (
    <div style={{
        position: "absolute",
        bottom: "80px",
        left: "20px",
        background: "white",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        zIndex: 10
      }}
>
      {emojis.map((e) => (
        <span key={e} style={{ fontSize:"24px", cursor:"pointer" }}
          onClick={() => addReaction({ emoji: e })}>
          {e}
        </span>
      ))}
    </div>
  );
}

