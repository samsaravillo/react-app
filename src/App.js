import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import Home from './components/home/home';
import NotFound from './components/notFound';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <main className="container">
          <div className="content">
            <Switch>
              <Route path="/home" component={Home} />
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
