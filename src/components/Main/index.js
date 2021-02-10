import React, {useState, useEffect} from "react";
import axios from "axios";
import MainWrapper from "./styles";

import Temperature from "../Temperature";
import Location from "../Location";

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

  const {main, weather, sys} = weatherInfo;

  if (loading) {
    return <div> LoAdInG ...</div>;
  }

  return (
    <MainWrapper>
      <Temperature data={main} />
      <Location data={sys} />
    </MainWrapper>
  );
};

export default Main;
