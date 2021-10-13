import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./App.css";

export default function Weather(props) {
    return (
      <div className="forecast-today">
        <div className="row">
          <div className="col-6">
            <h1>{props.city}</h1>
            <p className="main-date">
              <FormattedDate date={props.dt} />
            </p>
            <h2>
              <span className="main-temperature">{props.temperature}</span>
              <span className="temperature-units">
                <a href="#0" class="active">
                  °C
                </a>
                /<a href="#0">°F</a>
              </span>
            </h2>
            <div className="main-weather-icon">
              <WeatherIcon code={props.icon} alt={props.description} />
            </div>
          </div>
          <div className="col-6 description-list">
            <ul>
              <li>{props.description}</li>
              <li>
                Humidity: <strong>{props.humidity}</strong>%
              </li>
              <li>
                Wind: <strong>{props.wind}</strong>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}