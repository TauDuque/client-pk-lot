import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { coins_icn, pklot_icn, count_icn } from "../assets";

const RightMenu = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>Contas</h2>
      </div>
      <div className="accounts">
        <ul>
          <li>
            <span>
              Saldo
              <br /> 24h
            </span>
            <span>R$148,50</span>
            <span>
              <img src={coins_icn} alt="ícone" />
            </span>
          </li>
          <li>
            <span>
              Saldo <br />
              30d
            </span>
            <span>418,00</span>
            <span>
              <img src={count_icn} alt="ícone" />
            </span>
          </li>
          <li>
            <span>
              Carros <br />
              24h
            </span>
            <span>14</span>
            <span>
              <img src={pklot_icn} alt="ícone" />
            </span>
          </li>
        </ul>
      </div>
      <div className="help-section">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          eaque expedita in aliquam?
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 992px) {
    margin-top: 2px;
    margin-bottom: 0;
    gap: 10px;
    margin-left: 35px;
    line-height: 16px;
    background: var(--vanilla);
    border: 2px solid var(--light-black);
    border-radius: 8px;
    height: 535px;
    width: 235px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
      display: flex;
      padding-left: 0;
      margin-top: 20px;
      flex-direction: column;
      width: 100%;
      gap: 15px;
    }

    li {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .accounts,
    .help-section {
      border: 2px solid var(--light-black);
      height: 215px;
      border-radius: 4px;
      width: 95%;
      display: flex;
      background: var(--white-clr-3);
    }
    .title {
      justify-content: center;
      display: flex;
      color: var(--all-black);
      margin-top: 10px;
    }
  }
`;

export default RightMenu;
