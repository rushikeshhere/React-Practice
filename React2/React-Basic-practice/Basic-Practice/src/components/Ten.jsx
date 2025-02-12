import React, { useState } from "react";

export default function Ten(props) {
  const [backgroundColor, setBackgroundColor] = useState("lightblue");

  const handleColorChange = () => {
    let newColor = backgroundColor === "lightblue" ? "pink" : "green";
    setBackgroundColor(newColor);
  };

  return (
    <>
      <div
        onClick={handleColorChange}
        style={{ backgroundColor, width: "500px", height: "520px" }}
      >
        <h2>Click me to change the color </h2>
      </div>
    </>
  );
}
