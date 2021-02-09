import React from "react";
import {render} from "react-dom";

import Main from "./components/Main/index.js";

const app = document.getElementById("app");
const el = (
  <div>
    <Main />
  </div>
);

render(el, app);
