import React, { useEffect, useState } from "react";

export default function Eight(props) {
  const [time, setTime] = useState(60);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start && time > 0) {
      let timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [start, time]);

  const handleTimeOut = () => {
    if (start) {
      setStart(false);
      setTime(60);
    } else {
      setStart(true);
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}> Timer :{time}</h2>

      <button
        style={{ display: "flex", alignContent: "center", margin: "0 auto" }}
        onClick={handleTimeOut}
      >
        Start
      </button>
    </>
  );
}
