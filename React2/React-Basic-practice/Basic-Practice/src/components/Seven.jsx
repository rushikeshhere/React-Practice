import React, { useEffect, useState } from "react";

export default function Seven() {
  const [dateTime, setTime] = useState(
    new Date().toLocaleTimeString(),
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>
        This is the current time at your location : {dateTime.date}{" "}
        {" Time is   "}
        {dateTime.time}
      </p>
    </>
  );
}
