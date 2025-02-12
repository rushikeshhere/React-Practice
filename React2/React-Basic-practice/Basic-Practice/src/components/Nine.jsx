import React, { useState } from "react";

export default function Nine(props) {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <>
      <center style={{ margin: "10% auto" }}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => setTodo([...todo, input])}>Add Todo</button>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {todo.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button
                  onClick={() =>
                    setTodo([...todo.slice(0, index), ...todo.slice(index + 1)])
                  }
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </center>
    </>
  );
}
