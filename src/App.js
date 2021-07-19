import React from "react";
import { Loading, LeftMenu, RightMenu, Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Accounts,
  Birthdays,
  Home,
  SubmitVehicle,
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
        <div className="container" style={{ display: "flex" }}>
          <div className="row section-center">
            <div className="col ">
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
                <Route exact path="/staff">
                  <Staff />
                </Route>
                <Route exact path="/submitvehicle">
                  <SubmitVehicle />
                </Route>
              </div>
            </Switch>
            <div className="col" style={{ paddingRight: "0" }}>
              <RightMenu />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
