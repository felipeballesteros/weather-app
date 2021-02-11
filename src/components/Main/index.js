import React, {useState, useEffect} from "react";
import axios from "axios";
import {MainWrapper, WidgetContainer} from "./styles";

import Temperature from "../Temperature";
import Weather from "../Weather";
import Location from "../Location";
import Coordinates from "../Coordinates";
import Visibility from "../Visibility";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=imperial&appid=f2d256778f4c877271b311c22dd7e42f";

const Main = () => {
  const [data, setData] = useState({weatherInfo: {}, loading: true});

  const getUrl = url => {
    axios
      .get(url)
      .then(res => {
        setData({weatherInfo: res.data, loading: false});
      })
      .catch(error => {
        throw error;
      });
  };

  useEffect(() => getUrl(url), []);

  const {weatherInfo, loading} = data;

  const {main, weather, sys, coord, visibility} = weatherInfo;

  if (loading) {
    return <div> LoAdInG ...</div>;
  }

  return (
    <MainWrapper>
      <WidgetContainer>
        <Temperature data={main} />
        <Weather data={weather} />
        <Location data={sys} />
        <Coordinates data={coord} />
        <Visibility data={visibility} />
      </WidgetContainer>
    </MainWrapper>
  );
};

export default Main;
