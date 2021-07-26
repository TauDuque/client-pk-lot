import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  LeftMenu,
  RightMenu,
  Navbar,
  OnSubmit,
  Leaving,
  SubmitedForm,
} from "../components";
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
} from "../pages";

const MainPage = () => {
  return (
    <Wrapper className="section">
      <div className="container" style={{ display: "flex" }}>
        <div className="row section-center">
          <div className="col ">
            <LeftMenu />
          </div>
          <div className="col-6  "></div>
          <div className="col" style={{ paddingRight: "0" }}>
            <RightMenu />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 992px) {
  }
`;

export default MainPage;
