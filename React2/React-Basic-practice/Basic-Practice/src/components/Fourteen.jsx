import React, { useEffect, useState } from "react";

export default function Fourteen(props) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const getWeather = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=029607caed9a44f8b92112138251402&q=${input}`
    )
      .then((res) => res.json())
      .then((data) => setResult(data));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Welcome to the Weather app</h2>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <input
            style={{ fontSize: "25px", width: "250px", borderRadius: "7px" }}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button style={{ borderRadius: "7px" }} onClick={getWeather}>
            Get Weather
          </button>
        </div>
        <div style={{ fontFamily: "TimesNewRoman", fontSize: "20px" }}>
          {result && (
            <div>
              <p>Location :{result.location.name}</p>
              <p> Tempreature :{result.current.temp_c}</p>
              <img src={result.current.condition.icon} alt="Weather icon" />
              <p>condition :{result.current.condition.text}</p>
              <p>Country :{result.location.country}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
