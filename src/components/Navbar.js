import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiHomeGarage } from "react-icons/gi";
import { useGlobalContext } from "../context";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  const { current_name } = useGlobalContext();

  return (
    <Wrapper>
      <ul>
        <li>
          <GiHomeGarage className="logo" />
        </li>
        <li className="menu-icon">
          <TiThMenuOutline />
        </li>
        <li className="current-name">
          <h2>{current_name}</h2>
        </li>
        <li className="current-time">
          <h2>16:20</h2>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: var(--white-clr-1);
  width: 75%;
  .logo {
    font-size: 48px;
    bottom: 17px;
    position: absolute;
  }
  .menu-icon {
    display: block;
  }
  .current-name {
    display: none;
  }
  .current-time {
    display: none;
  }
  ul {
    display: flex;
    position: relative;
    justify-content: space-between;
  }

  @media (min-width: 992px) {
    width: 75%;
    ul {
      display: flex;
      position: relative;
      justify-content: space-between;
      padding-top: 15px;
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
