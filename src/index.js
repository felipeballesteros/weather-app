import React from "react";
import {render} from "react-dom";

import Main from "./components/Main/index.js";

const app = document.getElementById("app");
const el = (
  <React.Fragment>
    <Main />
  </React.Fragment>
);

render(el, app);
