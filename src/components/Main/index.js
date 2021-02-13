import React, {useState, useEffect} from "react";
import axios from "axios";
import {MainWrapper, WidgetContainer, Loader} from "./styles";

import Search from "../Search";
import Temperature from "../Temperature";
import Weather from "../Weather";
import Location from "../Location";
import Coordinates from "../Coordinates";
import Visibility from "../Visibility";

const Main = () => {
  const [data, setData] = useState({weatherInfo: {}, loading: true});
  const defaultLocation = "Toronto";
  const defaultUnits = "imperial";

  const getUrl = (location, units) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=f2d256778f4c877271b311c22dd7e42f`;

    axios
      .get(url)
      .then(res => {
        setData({weatherInfo: res.data, loading: false});
      })
      .catch(error => {
        throw error;
      });
  };

  useEffect(() => getUrl(defaultLocation, defaultUnits), []);

  const handleLocationChange = textInput => {
    if (textInput !== "") {
      getUrl(textInput, defaultUnits);
    }
  };

  const {weatherInfo, loading} = data;
  const {main, weather, sys, coord, visibility, name} = weatherInfo;

  if (loading) {
    return (
      <MainWrapper>
        <Loader />
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <Search locationChange={handleLocationChange} />

      <WidgetContainer>
        <Temperature data={main} name={name} />
        <Weather data={weather} />
        <Location data={sys} />
        <Coordinates data={coord} />
        <Visibility data={visibility} />
      </WidgetContainer>
    </MainWrapper>
  );
};

export default Main;
