import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import "../components/custom.css";

import React from "react";
import Routes from "./routes";

export default (props) => (
  <div className="container">
    <Routes />
  </div>
);
