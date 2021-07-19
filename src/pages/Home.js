import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Logo } from "../components";

const Home = () => {
  const { getName } = useGlobalContext();

  useEffect(() => {
    getName("Home");
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
