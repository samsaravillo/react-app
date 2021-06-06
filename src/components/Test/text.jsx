import React from "react";
import { Alert } from "reactstrap";
import Slider from "./../slider";
import Chart from "./../chart";

const Test = () => {
  return (
    <div>
      <Alert color="primary">This is a primary alert — check it out!</Alert>

      <div>
        <Slider></Slider>
        <Chart></Chart>
      </div>
    </div>
  );
};
export default Test;
