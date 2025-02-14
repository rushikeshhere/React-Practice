import React, { useState } from "react";

export default function Fifteen({ items }) {
  const [searchedItem, setSearchedItem] = useState("");

  const filterdItem = items.filter((item) =>
    item.toLowerCase().includes(searchedItem.toLowerCase())
  );
  console.log(filterdItem);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input
          style={{ fontSize: "25px", borderRadius: "7px", textAlign: "center" }}
          type="text"
          placeholder="Search here anything ...."
          onChange={(e) => setSearchedItem(e.target.value)}
        />
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {filterdItem.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
