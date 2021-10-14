import React, { useState } from "react";

export default function TemperatureUnits(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahreinheit")
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return ( 
            <h2>
                <span className="main-temperature">{Math.round(props.celsius)}</span>
                <span className="temperature-units">
                <a href="#0" class="active">
                    °C
                </a>
                /<a href="#0" onClick={showFahrenheit}>°F</a>
                </span>
            </h2>
        );
    } else {
        const fahrenheit = (props.celsius * 9/5) + 32;
        return (
          <h2>
            <span className="main-temperature">{Math.round(fahrenheit)}</span>
            <span className="temperature-units">
              <a href="#0" onClick={showCelsius}>
                °C
              </a>
              /
              <a href="#0" class="active">
                °F
              </a>
            </span>
          </h2>
        );
    }
}