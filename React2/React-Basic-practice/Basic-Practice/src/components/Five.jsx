import React, { useState } from "react";

export default function Five(props) {
  let [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <center>
        <label>
          <input type="checkbox" onChange={handleToggle} />
        </label>
        <p> {toggle ? "On" : "Off"}</p>
      </center>
    </>
  );
}
