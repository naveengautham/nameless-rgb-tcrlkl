import React, { useRef, useState } from "react";

export default function SignatureCanvas() {
  const currentRef = useRef("");
  const [sign, setSign] = useState(false);

  const handleMouseDown = (e) => {
    const canvas = currentRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offesetX, e.nativeEvent.offesetY);
    setSign(true);
  };
  const handleMouseMove = (e) => {
    if (!sign) return;
    const canvas = currentRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };
  const handleMouseUp = () => {
    setSign(false);
  };

  return (
    <div>
      <h1>Siganture Canvas</h1>
      <canvas
        ref={currentRef}
        width={500}
        height={200}
        style={{ border: "1px solid black" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
}
