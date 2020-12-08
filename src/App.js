import React, { Component } from "react";
import "./App.css";
import Home from "./components/home";
import Contacts from "./components/contacts";
class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  }

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <Home />
        <Contacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
