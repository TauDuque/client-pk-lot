import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Logo } from "../components";
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
        <h5>Veículos Estacionados:</h5>
        <h2>12</h2>
        <h5>Vagas Disponíveis:</h5>
        <h2>44</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .home-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 992px) {
  }
`;

export default Home;
