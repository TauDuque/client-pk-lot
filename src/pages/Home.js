import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Logo } from "../components";
import {
  GiCarKey,
  GiFullMotorcycleHelmet,
  GiCheckeredFlag,
} from "react-icons/gi";
import { helps } from "../utils";

const Home = () => {
  const { getName } = useGlobalContext();
  const description = helps.find((desc) => desc.id === "Home");
  const { title, help } = description;

  useEffect(() => {
    getName(title, help);
  }, []);

  return (
    <Wrapper className="section">
      <Logo />
      <div className="home-info">
        <h5>Carros:</h5>
        <h2>8</h2>
        <span>
          <GiCarKey className="home-icn" />
        </span>
      </div>
      <div className="home-info">
        <h5>Motos:</h5>
        <h2>4</h2>
        <span>
          <GiFullMotorcycleHelmet className="home-icn" />
        </span>
      </div>
      <div className="home-info">
        <h5>Vagas:</h5>
        <h2>44</h2>
        <span>
          <GiCheckeredFlag className="home-icn" />
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .home-info {
    display: flex;
    gap: 75px;
    align-items: center;
    margin-bottom: 25px;
    .home-icn {
      font-size: 35px;
      margin-bottom: 8px;
    }
  }
  @media (min-width: 992px) {
  }
`;

export default Home;
