import React, { useState, useEffect } from "react";
import { Alert } from "reactstrap";
import Slider from "./../slider";
import Chart from "./../chart";
import Contacts from "./../contacts";
import CreateOption from "../common/createOption/createOption";

const Home = () => {
  const [$contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = () => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <div>
        <CreateOption />
      </div>
      <div>
        <Slider></Slider>
        <Chart></Chart>
        <Contacts contacts={$contacts} />
      </div>
    </React.Fragment>
  );
};

export default Home;
