import React from "react";
import axios from "axios";

export default function Weather(props) {
    function displayWeather(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}`);
    }

    let apiKey = `3b2c6af1778711e6c3af06800ecbd9b8`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);

    return <h2>Hello from Weather</h2>
}