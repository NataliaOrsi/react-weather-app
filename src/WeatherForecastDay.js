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

     function month() {
       let date = new Date(props.data.dt * 1000);
       let month = date.getMonth();

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
         "December"
       ]
       return months[month];
     }

     function daysOfMonth() {
       let date = new Date(props.data.dt * 1000);
       let day = date.getDate();

       if (day === 1 || day === 21 || day === 31) {
         return `${day}st`
       } else if (day === 2 || day === 22) {
         return `${day}nd`;
       } else if (day === 3 || day === 23) {
         return `${day}rd`;
       } else {
         return `${day}th`;
       }

     }

    return (
      <div>
        <div className="forecast-week-day">{day()}</div>
        <div className="forecast-week-date">{month()}, {daysOfMonth()}</div>
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