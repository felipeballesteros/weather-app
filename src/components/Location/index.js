import React from "react";
import LocationWrapper from "./styles";

const Location = props => {
  if (props.data) {
    console.log(props.data);
    const {country, sunrise, sunset} = props.data;

    // Needs some work
    const convertToReadableDate = epoch => {
      const newDate = new Date(0);
      newDate.setUTCSeconds(epoch).toLocaleString;
      return newDate.toString();
    };
    return (
      <LocationWrapper>
        <p>Country: {country}</p>
        <p>Sunrise: {convertToReadableDate(sunrise)}</p>
        <p>Sunset: {convertToReadableDate(sunset)}</p>
      </LocationWrapper>
    );
  }

  return null;
};

export default Location;
