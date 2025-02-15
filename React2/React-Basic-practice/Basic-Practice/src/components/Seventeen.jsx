import React, { useState } from "react";
import "../styles/Seventeen.css";
export default function Seventeen(props) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button className="hamberger-icon" onClick={() => setIsOpened(!isOpened)}>
        ≣
      </button>
      <div className={`items ${isOpened ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Conatact Us</li>
          <li>About</li>
          <li>Careers</li>
        </ul>
      </div>
    </>
  );
}
