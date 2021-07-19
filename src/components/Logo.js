import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { main_logo } from "../assets";

const Logo = () => {
  return (
    <Wrapper>
      <div className="main-logo">
        <img src={main_logo} alt="" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-logo {
    display: flex;
    margin: 15px;
    margin-bottom: 35px;
  }
`;

export default Logo;
