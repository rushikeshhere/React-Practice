import React from "react";

export default function Four(props) {
  const nameList = ["Rushikesh", "Rakesh", "Roshan", "Ravan"];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>This is the name List whose completed all four tasks!</h3>
        <ol>
          {nameList.map((name, index) => {
            return (
              <li
                style={{ justifyContent: "space-around", padding: "0 10px" }}
                key={index}
              >
                {name}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
