import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    }

    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}`;
    }

     function day() {
       let date = new Date(props.data.dt * 1000);
       let day = date.getDay();

       let days = [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday",
       ];

       return days[day];
     }

    return (
      <div>
        <div className="forecast-week-day">{day()}</div>
        <div className="forecast-week-date">October, 15th</div>
        <div className="weather-icons">
          <WeatherIcon code={props.data.weather[0].icon} size={48} />
        </div>
        <div className="forecast-week-temperatures">
          <span className="week-max-temperature">{maxTemperature()}°</span>
          <span className="week-min-temperature">{minTemperature()}°</span>
        </div>
      </div>
    );
}