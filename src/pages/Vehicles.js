import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

import { Logo } from "../components";
import { helps } from "../utils";

const Vehicles = () => {
  const { getName } = useGlobalContext();
  const description = helps.find((desc) => desc.id === "Vehicles");
  const { title, help } = description;

  useEffect(() => {
    getName(title, help);
  }, []);
  return (
    <Wrapper className="section">
      <Logo />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .home-info {
    display: flex;
    gap: 75px;
    align-items: center;
    margin-bottom: 25px;
    .vehicle-icn {
      font-size: 35px;
      margin-bottom: 8px;
    }
  }
  @media (min-width: 992px) {
  }
`;

export default Vehicles;
