import React from "react";
import axios from "axios";

import Temperature from "./Temperature/index.js";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=imperial&appid=f2d256778f4c877271b311c22dd7e42f";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
    };
  }
  getUrl = () => {
    axios
      .get(url)
      .then(res => {
        const response = res.data;
        this.setState({
          data: response,
          loading: false,
        });
      })
      .catch(error => {
        throw error;
      });
  };

  componentDidMount() {
    this.getUrl();
  }

  render() {
    const {loading, data} = this.state;

    if (loading) {
      return <div> LoAdInG ...</div>;
    }

    return (
      <div>
        <Temperature data={data.main} />
      </div>
    );
  }
}

export default Main;
