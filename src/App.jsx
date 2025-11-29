import React, { useState } from "react";
import useWhiteboardSocket from "./hooks/useWhiteboardSocket";

import Toolbar from "./components/Toolbar";
import CanvasBoard from "./components/CanvasBoard";
import CommentsBox from "./components/CommentsBox";
import ReactionsLayer from "./components/ReactionsLayer";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const {
    strokes, setStrokes,
    comments,
    reactions,
    sendStroke,
    sendComment,
    sendReaction,
    sendErase
  } = useWhiteboardSocket();

  const [color, setColor] = useState("#000");
  const [commentText, setCommentText] = useState("");

  const eraseCanvas = () => {
    sendErase();
    setStrokes([]);
  };

  const exportImage = () => {
    const canvas = document.querySelector("canvas");
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "whiteboard.png";
    link.click();
  };

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", background: "#fff" }}>
      <h1 style={{ textAlign: "center" }}>Collaborative Whiteboard</h1>

      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Toolbar
            color={color}
            setColor={setColor}
            eraseCanvas={eraseCanvas}
            exportImage={exportImage}
          />

          <CanvasBoard
            strokes={strokes}
            setStrokes={setStrokes}
            sendStroke={sendStroke}
            color={color}
          />
        </div>

        <CommentsBox
          comments={comments}
          commentText={commentText}
          setCommentText={setCommentText}
          sendComment={sendComment}
          addReaction={sendReaction}
        />
      </div>

      <ReactionsLayer reactions={reactions} />
    </div>
    

    </>
  );
}

export default App;
