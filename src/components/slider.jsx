import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

import { modelsData } from "./../services/mockData";

const Slider = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <h5>Range Slider</h5>
      <div className="slidecontainer">
        {/* <input
          type="range"
          min="1"   
          max="100"
          value="50"
          className="slider"
          id="myRange"
        />
        <p>
          Value: <span id="demo"></span>
        </p> */}
      </div>

      <RangeSlider
        value={value}
        onChange={(changeEvent) => setValue(changeEvent.target.value)}
        tooltip="on"
        tooltipPlacement="top"
      />
    </div>
  );
};

export default Slider;
