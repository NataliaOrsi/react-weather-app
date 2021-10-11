import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

import "./App.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [message, setMessage] = useState({ ready: false });

  function displayWeather(response) {
    setMessage({
      ready: true,
      cityName: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSearch() {
    let apiKey = `3b2c6af1778711e6c3af06800ecbd9b8`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  if (message.ready) {
    return (
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city..."
                autocomplete="off"
                onChange={updateCity}
              />
            </div>
            <div class="col-3">
              <input
                className="btn btn-primary w-100 search-button"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <Weather
          city={message.cityName}
          temperature={message.temperature}
          icon={message.icon}
          description={message.description}
          humidity={message.humidity}
          wind={message.wind}
        />
      </div>
    );
  } else {
    handleSearch();
    return "Loading...";
  }

  
}
