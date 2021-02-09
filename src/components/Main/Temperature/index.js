import React from "react";

const Temperature = props => {
  if (props.data) {
    const {temp} = props.data;
    return <div>Temperature: {temp}</div>;
  }

  return null;
};

export default Temperature;
