import React from "react";
import VisibilityWrapper from "./styles";

const Visibililty = props => {
  if (props.data) {
    const visibility = props.data;
    return (
      <VisibilityWrapper>
        <p>Visibility: {visibility}</p>
      </VisibilityWrapper>
    );
  }

  return null;
};

export default Visibililty;
