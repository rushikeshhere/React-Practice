import React, { useEffect, useState } from "react";

export default function Thrteen(props) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `http://api.weatherapi.com/v1/current.json?key=029607caed9a44f8b92112138251402&q=${latitude},${longitude}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setWeather(data);
          });
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      {weather && (
        <div>
          <p>Location : {weather.location.name}</p>
          <p> Tempreature :{weather.current.temp_c}</p>
          <p>condition :{weather.current.condition.text}</p>
        </div>
      )}
    </>
  );
}
