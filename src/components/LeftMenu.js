import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LeftMenu = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>Menu</h2>
      </div>
      <hr />
      <ul>
        <li>Início</li>
        <hr />
        <li>Veículos</li>
        <hr />
        <li>Preços</li>
      </ul>
      <hr />
      <h4>Funcionários</h4>
      <hr />
      <ul>
        <li>Staff</li>
        <hr />
        <li>Turnos</li>
        <hr />
        <li>Aniversários</li>
      </ul>
      <hr />
      <ul>
        <li>Fechar o dia</li>
        <hr />
        <li>Sair</li>
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
      width: 113%;
      margin-left: -13%;
    }
    hr.separator {
      border: 2px double var(--all-black);
      width: 113%;
      margin-left: -13%;
    }
    ul,
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h4 {
      display: flex;
      justify-content: center;
    }
    li {
      margin-left: -13%;
      cursor: pointer;
    }
    li:hover {
      transform: scale(1.3);
    }

    .title {
      justify-content: center;
      display: flex;
      color: var(--all-black);
      margin-top: 5px;
    }
  }
`;

export default LeftMenu;
