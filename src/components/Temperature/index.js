import React from "react";
import TemperatureWrapper from "./styles";

const Temperature = props => {
  if (props.data && props.name) {
    const {
      temp,
      temp_max,
      temp_min,
      feels_like,
      humidity,
      pressure,
    } = props.data;

    return (
      <TemperatureWrapper>
        <p>Name: {props.name}</p>
        <p>Temperature: {temp}</p>
        <p>Temperature Max: {temp_max}</p>
        <p>Temperature Min: {temp_min}</p>
        <p>Feels Like: {feels_like}</p>
        <p>Humidity: {humidity}</p>
        <p>Pressure: {pressure}</p>
      </TemperatureWrapper>
    );
  }

  return null;
};

export default Temperature;
