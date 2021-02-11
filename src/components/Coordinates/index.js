import React from "react";
import CoordinatesWrapper from "./styles";

const Coordinates = props => {
  if (props.data) {
    const {lon, lat} = props.data;
    return (
      <CoordinatesWrapper>
        <p>Longitude: {lon}</p>
        <p>Latitude: {lat}</p>
      </CoordinatesWrapper>
    );
  }

  return null;
};

export default Coordinates;
