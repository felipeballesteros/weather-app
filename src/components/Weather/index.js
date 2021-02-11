import React from "react";
import WeatherWrapper from "./styles";

const Weather = props => {
  if (props.data && props.data.length) {
    const getIconUrl = icon => {
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    };

    const [{main, description, icon}] = props.data;
    return (
      <WeatherWrapper>
        <img className="weatherImage" src={getIconUrl(icon)}></img>

        <p>Main: {main}</p>
        <p>Description: {description}</p>
      </WeatherWrapper>
    );
  }

  return null;
};

export default Weather;
