import React, { useState } from "react";
import './Weather.css'
import { FaSearch } from "react-icons/fa";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const api = {
    key: "707bbb5ab31e2dffb626c08aa6fa44a0",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const search = (evt) => {
    if ((evt.key === "Enter") || evt.type === "click") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((reuslt) => {
          setWeather(reuslt);
          setQuery("");
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp>16)? 'app-warm':'app'):'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          
          />
          <FaSearch className="btn" onClick={search}/>
        
        </div>
        {(typeof weather.main != "undefined") ? (<div>
          <div className="location-box">
            <div className="location">
             {weather.name},{weather.sys.country}
                
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">
                {weather.weather[0].main}
            </div>
          </div>
        </div>) : ('') }
        
      </main>
    </div>
  );
};

export default Weather;
