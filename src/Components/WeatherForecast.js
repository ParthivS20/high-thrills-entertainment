import React, { Component } from "react";
import { connect } from "react-redux";

import ForecastStart from "./ForecastStart";
import Dashboard from "./Dashboard";

const WeatherForecast = ({ data }) => {
  const { city, list } = data;
  const { name } = city;

  return (
    <div className="weather-forecast-wrapper">
      <Dashboard city={name} />
      <ForecastStart forecasts={list} />
    </div>
  );
};

export default WeatherForecast;
