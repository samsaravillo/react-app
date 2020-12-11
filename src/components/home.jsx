import React from "react";
import { Alert } from "reactstrap";
import Slider from "./slider";
import Chart from "./chart";
import List from "./list";

const Home = () => {
  const handleCreateSomething = () => {
    console.log("handle Create Something");
  };

  const handleReadSomething = () => {
    console.log("handle Read Something");
  };

  const handleUpdateSomething = () => {
    console.log("handle Update Something");
  };

  const handleDestroySomething = () => {
    console.log("handle Destroy Something");
  };

  return (
    <React.Fragment>
      <List
        create={handleCreateSomething}
        read={handleReadSomething}
        update={handleUpdateSomething}
        destroy={handleDestroySomething}
      />
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <div>
        <Slider />
        <Chart />
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
