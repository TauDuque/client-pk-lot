import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Logo, Loading } from "../components";
import {
  GiCarKey,
  GiFullMotorcycleHelmet,
  GiCheckeredFlag,
} from "react-icons/gi";
import { helps } from "../utils";

const Home = () => {
  const {
    getName,
    free_vacancies,
    vehicles,
    is_loading,
    loaderHide,
    displayHandlerShow,
  } = useGlobalContext();
  const description = helps.find((desc) => desc.id === "Home");
  const { title, help } = description;

  const carTotal = vehicles.filter((item) => item.type === "carro");
  const motoTotal = vehicles.length - carTotal.length;

  useEffect(() => {
    displayHandlerShow();
  }, []);

  useEffect(() => {
    getName(title, help);

    setTimeout(() => {
      loaderHide();
    }, 2000);
  }, []);

  if (is_loading) {
    return <Loading />;
  }

  return (
    <Wrapper className="section">
      <Logo />
      <div className="home-info">
        <h5>Carros:</h5>
        <h2>{carTotal.length}</h2>
        <span>
          <GiCarKey className="home-icn" />
        </span>
      </div>
      <div className="home-info">
        <h5>Motos:</h5>
        <h2>{motoTotal}</h2>
        <span>
          <GiFullMotorcycleHelmet className="home-icn" />
        </span>
      </div>
      <div className="home-info">
        <h5>Vagas:</h5>
        <h2>{free_vacancies - vehicles.length}</h2>
        <span>
          <GiCheckeredFlag className="home-icn" />
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .home-info {
    display: flex;
    gap: 75px;
    align-items: center;
    margin-bottom: 25px;
    .home-icn {
      font-size: 35px;
      margin-bottom: 8px;
    }
  }
  @media (min-width: 992px) {
  }
`;

export default Home;
