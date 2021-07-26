import React from "react";
import {
  LeftMenu,
  RightMenu,
  Navbar,
  OnSubmit,
  Leaving,
  SubmitedForm,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useGlobalContext } from "./context";
import {
  Accounts,
  Birthdays,
  Home,
  SubmitVehicle,
  Shifts,
  Staff,
  SingleVehicle,
  Starter,
  Vehicles,
} from "./pages";

function App() {
  const { site_display } = useGlobalContext();
  return (
    <div className="main-container">
      <Router>
        <Navbar />
        <Switch>
          <div className="container" style={{ display: "flex" }}>
            <div
              className={
                site_display ? "row section-center" : "row section-center no-bg"
              }
            >
              {site_display && (
                <div className="col ">
                  <LeftMenu />
                </div>
              )}
              <div className="col-6  ">
                <Route exact path="/home">
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
                <Route
                  extac
                  path="/vehicles/:id"
                  children={<SingleVehicle />}
                />
                <Route exact path="/staff">
                  <Staff />
                </Route>
                <Route exact path="/submitvehicle">
                  <SubmitVehicle />
                </Route>
                <Route exact path="/onsubmit">
                  <OnSubmit />
                </Route>
                <Route exact path="/submitedform">
                  <SubmitedForm />
                </Route>
                <Route extac path="/leaving">
                  <Leaving />
                </Route>
              </div>
              {site_display && (
                <div className="col" style={{ paddingRight: "0" }}>
                  <RightMenu />
                </div>
              )}
              <Route exact path="/">
                <Starter />
              </Route>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
