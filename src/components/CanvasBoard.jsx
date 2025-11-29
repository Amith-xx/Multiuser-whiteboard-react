import React, { useRef, useEffect } from "react";

export default function CanvasBoard({ strokes, setStrokes, sendStroke, color }) {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const currentStrokeRef = useRef([]);

  const redraw = (ctx, stroke) => {
    ctx.beginPath();
    const points = stroke.points;

    ctx.moveTo(points[0].x, points[0].y);
    for (let p of points) {
      ctx.lineTo(p.x, p.y);
    }

    ctx.strokeStyle = stroke.color;
    ctx.lineWidth = stroke.width;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokes.forEach((stroke) => redraw(ctx, stroke));
  }, [strokes]);

  const startDrawing = (e) => {
    isDrawingRef.current = true;

    const { offsetX, offsetY } = e.nativeEvent;
    currentStrokeRef.current = [{ x: offsetX, y: offsetY }];
  };

  const draw = (e) => {
    if (!isDrawingRef.current) return;

    const { offsetX, offsetY } = e.nativeEvent;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const points = currentStrokeRef.current;
    const lastPoint = points[points.length - 1];

    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();

    points.push({ x: offsetX, y: offsetY });
  };

  const endDrawing = () => {
    if (!isDrawingRef.current) return;

    isDrawingRef.current = false;

    const stroke = {
      points: currentStrokeRef.current,
      color,
      width: 2
    };

    sendStroke(stroke);          // SEND VIA SOCKET.IO
    setStrokes((prev) => [...prev, stroke]);  // UPDATE LOCAL

    currentStrokeRef.current = [];
  };

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth * 0.6}
      height={window.innerHeight - 150}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={endDrawing}
      onMouseLeave={endDrawing}
      style={{ border: "2px solid #333", borderRadius: "10px" }}
    ></canvas>
  );
}
