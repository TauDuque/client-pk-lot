import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useGlobalContext } from "../context";
import { Logo, Loading } from "../components";

const OnSubmit = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/submitedform");
    }, 2400);
  });

  return (
    <Wrapper className="section">
      <Logo />
      <div className="submit-loading">
        <Loading />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 992px) {
  }
`;

export default OnSubmit;
