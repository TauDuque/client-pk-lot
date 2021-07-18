import React from "react";
import { Loading, LeftMenu, RightMenu, Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Accounts,
  Birthdays,
  Home,
  Prices,
  Shifts,
  Staff,
  Starter,
  Vehicles,
} from "./pages";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Navbar />
        <div className="container">
          <div className="row section-center">
            <div className="col-3 ">
              <LeftMenu />
            </div>
            <Switch>
              <div className="col-6  ">
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/accounts">
                  <Accounts />
                </Route>
                <Route exact path="/shifts">
                  <Shifts />
                </Route>
                <Route exact path="/birthdays">
                  <Birthdays />
                </Route>
                <Route exact path="/vehicles">
                  <Vehicles />
                </Route>
              </div>
            </Switch>
            <div className="col-3 ">
              <RightMenu />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
