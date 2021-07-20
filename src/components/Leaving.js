import React, { useEffect } from "react";
import styled from "styled-components";
import { Logo, Loading } from "../components";
import { useGlobalContext } from "../context";

const OnSubmit = () => {
  const { displayHandlerHide } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      displayHandlerHide();
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
