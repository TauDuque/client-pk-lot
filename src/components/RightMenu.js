import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { coins_icn, pklot_icn, count_icn } from "../assets";
import { useGlobalContext } from "../context";
import { reducerMethod } from "../utils";

const RightMenu = () => {
  const { description, vehicles, total_day_gain, total_month_gain } =
    useGlobalContext();
  const { help_text } = description;

  return (
    <Wrapper className="menu">
      <div className="title">
        <h2>Contas</h2>
      </div>
      <div className="accounts">
        <ul>
          <li>
            <span>
              Saldo/
              <br /> 24h
            </span>
            <span>R${total_day_gain},00</span>
            <span>
              <img src={coins_icn} alt="ícone" />
            </span>
          </li>
          <li>
            <span>
              Saldo/ <br />
              30d
            </span>

            <span>R${total_month_gain},00</span>
            <span>
              <img src={count_icn} alt="ícone" />
            </span>
          </li>
          <li>
            <span>
              Veículos/ <br />
              24h
            </span>
            <span>{vehicles.length}</span>
            <span>
              <img src={pklot_icn} alt="ícone" />
            </span>
          </li>
        </ul>
      </div>
      <div className="help-section">
        <p>{help_text}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .menu {
    display: none;
  }
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
    .help-section {
      padding-inline: 5px;
      padding-top: 5px;
      line-height: 19px;
    }
  }
`;

export default RightMenu;
