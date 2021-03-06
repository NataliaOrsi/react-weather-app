import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnits from "./TemperatureUnits";
import { useTranslation, Trans } from "react-i18next";

import "./App.css";

export default function Weather(props) {
    const { t } = useTranslation();

    return (
      <div className="forecast-today">
        <div className="row">
          <div className="col-6">
            <h1>{props.city}</h1>
            <p className="main-date">
              <FormattedDate date={props.dt} />
            </p>
            <TemperatureUnits celsius={props.temperature} />
            <div className="main-weather-icon">
              <WeatherIcon
                code={props.icon}
                size={70}
                alt={props.description}
              />
            </div>
          </div>
          <div className="col-6 description-list">
            <ul>
              <li>{props.description}</li>
              <li>
                <Trans i18nKey="description.part1">Humidity:</Trans>{" "}
                <strong>{props.humidity}</strong>%
              </li>
              <li>
                {t("description.part2")} <strong>{props.wind}</strong>
                km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}