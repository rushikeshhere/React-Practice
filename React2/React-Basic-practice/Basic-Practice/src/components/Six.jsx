import React, { useState } from "react";

export default function Six(props) {
  const [data, setData] = useState(null);

  const handleGetData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <>
      <button
        style={{ display: "flex", alignItems: "center" }}
        onClick={handleGetData}
      >
        Get Data
      </button>
      {/* {data && (
        <div>
          <p>Id :{data.id}</p>
          <p>Title : {data.title}</p>
          <p>Body : {data.body}</p>
          <p>UserId : {data.userId}</p>
        </div>
      )} */}

      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <p>Id : {item.id}</p>
              <p>Title : {item.title}</p>
              <p>Body : {item.body}</p>
              <p>UserId : {item.userId}</p>
              <hr />
            </div>
          );
        })}
    </>
  );
}
