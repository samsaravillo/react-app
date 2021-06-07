import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import Home from './components/home/home';
import NotFound from './components/notFound';
import './App.css';

import AddTutorial from './components/tutorial/addTutorial';
import Tutorial from "./components/tutorial/tutorial";
import TutorialsList from "./components/tutorial/tutorialsList";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/Home" className="navbar-brand">
          React-App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Tut
            </Link>
          </li>
        </div>
      </nav>

      <main className="container">
          <div className="content">
            <Switch>
              <Route exact path="/tutorials" component={TutorialsList} />
              <Route exact path="/add" component={AddTutorial} />
              <Route path="/tutorials/:id" component={Tutorial} />
              <Route exact path={["/", "/home"]} component={Home} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/home" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </main>
    </React.Fragment>
  );
}

export default App;
