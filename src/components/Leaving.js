import React, { useEffect } from "react";
import styled from "styled-components";
import { Logo, Loading } from "../components";
import { useHistory } from "react-router-dom";

import { useGlobalContext } from "../context";

const OnSubmit = () => {
  const { displayHandlerHide } = useGlobalContext();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
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
