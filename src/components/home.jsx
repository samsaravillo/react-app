import React from "react";
import { Alert } from "reactstrap";
import Slider from "./slider";
import Chart from "./chart";

const Home = () => {
  return (
    <React.Fragment>
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <div>
        <Slider></Slider>
        <Chart></Chart>
      </div>
      {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">Steve Jobs</h5>
          <h6 className="card-subtitle mb-2 text-muted">steve@apple.com</h6>
          <p className="card-text">Stay Hungry, Stay Foolish</p>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Home;
