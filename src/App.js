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
      {!site_display && (
        <Router>
          <Starter />
        </Router>
      )}
      {site_display && (
        <Router>
          <Navbar />
          <Switch>
            <div className="container" style={{ display: "flex" }}>
              <div className="row section-center">
                <div className="col ">
                  <LeftMenu />
                </div>
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
                <div className="col" style={{ paddingRight: "0" }}>
                  <RightMenu className={site_display ? "hide" : null} />
                </div>
              </div>
            </div>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
