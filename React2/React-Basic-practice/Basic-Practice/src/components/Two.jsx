import React, { useState } from "react";

export default function Two() {
  let [counterVal, setCounterVal] = useState(0);
  return (
    <>
      <div>
        <p>Counter value :{counterVal} </p>
        <button onClick={() => setCounterVal(counterVal++)}>Increment</button>
        <button onClick={() => setCounterVal(counterVal--)}>Decrement</button>
      </div>
    </>
  );
}
