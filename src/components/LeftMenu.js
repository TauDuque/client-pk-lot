import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>Menu</h2>
      </div>
      <hr />
      <ul>
        <Link to="/">
          <li>Início</li>
        </Link>
        <hr />
        <Link to="/vehicles">
          <li>Veículos</li>
        </Link>
        <hr />
        <Link to="/prices">
          <li>Preços</li>
        </Link>
      </ul>
      <hr />
      <h4>Funcionários</h4>
      <hr />
      <ul>
        <Link to="/staff">
          <li>Staff</li>
        </Link>
        <hr />
        <Link to="/shifts">
          <li>Turnos</li>
        </Link>
        <hr />
        <Link to="/birthdays">
          <li>Aniversários</li>
        </Link>
      </ul>
      <hr />
      <ul>
        <li>Fechar o dia</li>
        <hr />
        <Link to="/starter">
          <li>Sair</li>
        </Link>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 992px) {
    margin-top: 2px;
    margin-bottom: 0;
    margin-left: -8px;
    line-height: 16px;
    background: var(--vanilla);
    border: 2px solid var(--light-black);
    border-radius: 8px;
    height: 535px;
    width: 235px;
    display: flex;
    flex-direction: column;
    ul {
      margin-bottom: 0;
    }
    ul hr {
      border: 2px var(--all-black);
      width: 100%;
    }

    ul,
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 0;
    }
    h4 {
      display: flex;
      justify-content: center;
    }
    li,
    a {
      cursor: pointer;
      color: var(--light-black);
      font-family: var(--thir-font);
    }
    li:hover {
      transform: scale(1.3);
      color: var(--all-black);
    }

    .title {
      justify-content: center;
      display: flex;
      color: var(--all-black);
      margin-top: 10px;
    }
  }
`;

export default LeftMenu;
