import React, { useState, useEffect } from "react";
import { Button, Label, FormText, Row, Col } from "reactstrap";

const CreatScope = React.lazy(() => import("./common/createScope/createScope"));

const Overview = (props) => {
  return (
    <div>
      This is the overview main scope
      <CreatScope />
    </div>
  );
};

export default Overview;
