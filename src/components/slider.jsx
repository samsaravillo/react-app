import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

const Slider = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <h5>Range Slider</h5>
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
