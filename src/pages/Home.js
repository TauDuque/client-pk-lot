import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { name, getName } = useGlobalContext();

  useEffect(() => {
    getName("Home");
  }, []);

  return (
    <Wrapper>
      <h2>Home</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 992px) {
  }
`;

export default Home;
