import React, { useState } from "react";

export default function Three(props) {
  let [name, setName] = useState("");
  let [submittedName, setSubmittedName] = useState("");
  let [wishMessage, setWishMessage] = useState("");

  return (
    <>
      <p style={{ textAlign: "center", fontSize: "2rem" }}>
        Hello User {wishMessage}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "20px" }}>Enter yout name : </span>
        {""}
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{
            width: "200px",
            fontSize: "20px",
            borderRadius: "4px",
            marginRight: "25px",
          }}
          type="text"
        />
        <button
          style={{ height: "30px", borderRadius: "4px" }}
          onClick={() => {
            setSubmittedName(name);
            setWishMessage("Namaste!");
          }}
        >
          Submit Name{" "}
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>Your name is : {submittedName}</h2>
      </div>
    </>
  );
}
