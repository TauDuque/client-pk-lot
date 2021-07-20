import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Logo } from "../components";
import { helps, reducerMethod } from "../utils";

const Accounts = () => {
  const { getName, vehicles } = useGlobalContext();
  const description = helps.find((desc) => desc.id === "Accounts");
  const { title, help } = description;

  const calculateValue = vehicles.map((item) => item.singlePrice);

  const finalValue = calculateValue.reduce(reducerMethod);

  useEffect(() => {
    getName(title, help);
  }, []);

  return (
    <Wrapper className="section">
      <Logo />
      <div className="accounts-info">
        <div className="col-info">
          <span>Total de Veículos:</span>
          <h3>{vehicles.length}</h3>
        </div>
        <div className="col-info">
          <span>Valor Total do Dia:</span>
          <h3>R${finalValue}</h3>
        </div>
        <div className="col-info">
          <span>Valor Total do Mês:</span>
          <h3>R${8400 + finalValue}</h3>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-transform: capitalize;
  span {
    padding-right: 8px;
  }
  .accounts-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 25px;
  }
  .col-info {
    display: flex;
    align-items: baseline;
    margin: 12px;
  }
  @media (min-width: 992px) {
  }
`;

export default Accounts;
