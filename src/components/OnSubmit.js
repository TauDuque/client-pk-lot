import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Logo, Loading } from "../components";
import { useGlobalContext } from "../context";

const OnSubmit = () => {
  const { fetchData, getTotalValueDay, getTotalValueMonth } =
    useGlobalContext();
  const history = useHistory();

  useEffect(() => {
    fetchData();
    getTotalValueDay();
    getTotalValueMonth();
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
