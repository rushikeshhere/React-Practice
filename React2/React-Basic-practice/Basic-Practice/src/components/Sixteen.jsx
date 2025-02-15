import React, { useState } from "react";

export default function Sixteen(props) {
  const [selctedColor, setSelectedColor] = useState("");
  const [colorName, setColorName] = useState("");

  const handleChangeColor = (e) => {
    setSelectedColor(e.target.value);

    // Get the closest color name
    const name = colorName(e.target.value)[0]?.name || "Unknown Color";
    setColorName(name);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 500px",
          gap: "20px",
        }}
      >
        <label>Select Color : </label>
        <input
          style={{ width: "500px", height: "30px" }}
          type="color"
          onChange={handleChangeColor}
        />
      </div>
      <p style={{ textAlign: "center" }}>Selected Color : {colorName}</p>

      <div
        style={{
          margin: "50px auto",
          width: "500px",
          height: "500px",
          backgroundColor: selctedColor,
        }}
      ></div>
    </>
  );
}
