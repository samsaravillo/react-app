import React, { useState, useEffect } from "react";

import Contacts from "./../contacts";
import CreateOption from "../common/createScope/createScope";
import { optionData } from "../services/mockData";

const Home = () => {
  const [$contacts, setContacts] = useState([]);
  const [$options, setOptions] = useState([]);

  useEffect(() => {
    getContacts();
    getOptions();
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

  const getOptions = () => {
    setOptions(optionData);
    // fetch(optionData, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setOptions(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <React.Fragment>
      <Contacts contacts={$contacts} />

      <div>
        <CreateOption model={$options} />
      </div>
    </React.Fragment>
  );
};

export default Home;
