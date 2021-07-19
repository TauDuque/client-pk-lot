import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import {
  GiCarKey,
  GiFullMotorcycleHelmet,
  GiCheckeredFlag,
} from "react-icons/gi";
import { Logo } from "../components";

const Vehicles = () => {
  const { getName } = useGlobalContext();

  useEffect(() => {
    getName("Veículos Estacionados");
  }, []);
  return (
    <Wrapper className="section">
      <Logo />
      <div className="vehicle-info">
        <h5>Carros:</h5>
        <h2>8</h2>
        <span>
          <GiCarKey className="vehicle-icn" />
        </span>
      </div>
      <div className="vehicle-info">
        <h5>Motos:</h5>
        <h2>4</h2>
        <span>
          <GiFullMotorcycleHelmet className="vehicle-icn" />
        </span>
      </div>
      <div className="vehicle-info">
        <h5>Vagas:</h5>
        <h2>44</h2>
        <span>
          <GiCheckeredFlag className="vehicle-icn" />
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .vehicle-info {
    display: flex;
    gap: 75px;
    align-items: center;
    margin-bottom: 25px;
    .vehicle-icn {
      font-size: 35px;
      margin-bottom: 8px;
    }
  }
  @media (min-width: 992px) {
  }
`;

export default Vehicles;
