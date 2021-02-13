import React from "react";
import LocationWrapper from "./styles";
import isoCountries from "../../countryCodes";

const Location = props => {
  if (props.data) {
    const {country, sunrise, sunset} = props.data;

    const getCountryName = countryCode => {
      if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
      } else {
        return countryCode;
      }
    };
    const convertToReadableDate = epoch => {
      const newDate = new Date();
      newDate.setUTCSeconds(epoch);

      let hours = newDate.getHours();

      let minutes = newDate.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;

      return `${hours}:${minutes} ${ampm}`;
    };
    return (
      <LocationWrapper>
        <p>Country: {getCountryName(country)}</p>
        <p>Sunrise: {convertToReadableDate(sunrise)}</p>
        <p>Sunset: {convertToReadableDate(sunset)}</p>
      </LocationWrapper>
    );
  }

  return null;
};

export default Location;
