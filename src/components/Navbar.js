import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiHomeGarage } from "react-icons/gi";
import { useGlobalContext } from "../context";
import { TiThMenuOutline } from "react-icons/ti";
import moment from "moment";

const Navbar = () => {
  const { description } = useGlobalContext();
  const { current_name } = description;

  const currentTime = moment(new Date()).format("HH:mm");

  return (
    <Wrapper>
      <ul>
        <li>
          <GiHomeGarage className="logo" />
        </li>
        <li className="menu-icon">
          <TiThMenuOutline />
        </li>
        <li className="current-name" style={{ marginLeft: "90px" }}>
          <h2>{current_name}</h2>
        </li>
        <li className="current-time">
          <h2>{currentTime}</h2>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: var(--white-clr-1);
  height: 10px;
  margin-top: 50px;

  .logo {
    font-size: 48px;
    top: -30px;
    left: 90px;
    position: absolute;
  }

  .menu-icon {
    display: block;
    position: absolute;
    right: 90px;
    bottom: -25px;
    font-size: 35px;
  }
  .current-name {
    display: none;
  }
  .current-time {
    display: none;
  }
  ul {
    width: 414px;
    display: flex;
    position: relative;
    justify-content: center;
  }

  @media (min-width: 992px) {
    width: 69%;
    height: 65px;
    margin-top: 8px;
    margin-left: 25px;
    ul {
      display: flex;
      position: relative;
      justify-content: space-between;
      padding-top: 15px;
      padding-left: 0;
      width: 100%;
    }
    .logo {
      top: 5px;
      left: 25px;
    }
    .menu-icon {
      display: none;
    }
    .current-name {
      display: block;
    }
    .current-time {
      display: block;
    }
  }
`;

export default Navbar;
