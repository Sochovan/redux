import React from "react";
import * as weatherActions from "./weather.actions.js";
import { connect } from "react-redux";
import { weatherDataSelector } from "./weather.selectors.js";
import { useEffect } from "react";

const Weather = ({ weatherData, fetchWeatherData }) => {
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map((weather) => (
          <li className="city" key={weather.id}>
            <span className="city__name">{weather.name}</span>
            <span className="city__temperature">{`${weather.temperature} F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    weatherData: weatherDataSelector(state),
  };
};
const mapDispatch = {
  fetchWeatherData: weatherActions.fetchWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
