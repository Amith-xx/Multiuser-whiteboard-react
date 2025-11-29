import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

export default function useWhiteboardSocket() {
  const socketRef = useRef(null);

  const [strokes, setStrokes] = useState([]);
  const [comments, setComments] = useState([]);
  const [reactions, setReactions] = useState([]);

  useEffect(() => {
    // Create socket only once
    socketRef.current = io("http://localhost:8080");

    const socket = socketRef.current;

    socket.on("draw", (stroke) => {
      setStrokes((prev) => [...prev, stroke]);
    });

    socket.on("comment", (comment) => {
      setComments((prev) => [...prev, comment]);
    });

    socket.on("reaction", (reaction) => {
      setReactions((prev) => [
        ...prev,
        { ...reaction, id: Date.now() }
      ]);
    });

    socket.on("erase", () => {
      setStrokes([]);
    });

    return () => {
      socket.disconnect();
    };
  }, []); // <-- empty array is safe now

  // SEND FUNCTIONS
  const sendStroke = (stroke) =>
    socketRef.current.emit("draw", stroke);

  const sendComment = (comment) =>
    socketRef.current.emit("comment", comment);

  const sendReaction = (reaction) =>
    socketRef.current.emit("reaction", reaction);

  const sendErase = () =>
    socketRef.current.emit("erase");

  return {
    strokes, setStrokes,
    comments,
    reactions,
    sendStroke,
    sendComment,
    sendReaction,
    sendErase
  };
}
