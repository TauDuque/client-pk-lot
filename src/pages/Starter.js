import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  pklot_1,
  pklot_2,
  pklot_3,
  pklot_4,
  pklot_5,
  pklot_6,
  pklot_7,
} from "../assets";

const Starter = () => {
  const [width, setWidth] = useState(true);
  const items = [
    <img src={pklot_1} alt="estacionamento" />,
    <img src={pklot_2} alt="estacionamento" />,
    <img src={pklot_3} alt="estacionamento" />,
    <img src={pklot_4} alt="estacionamento" />,
    <img src={pklot_5} alt="estacionamento" />,
    <img src={pklot_6} alt="estacionamento" />,
  ];

  function widthHandler() {
    if (window.innerWidth < 992) {
      setWidth(false);
    } else setWidth(true);
  }

  window.onresize = widthHandler;

  useEffect(() => {
    widthHandler();
  }, []);

  return (
    <Wrapper>
      <div>
        <h2>Bem-vindo</h2>
      </div>
      {width && (
        <AliceCarousel
          items={items}
          autoPlay
          infinite
          disableButtonsControls
          disableDotsControls
          animationDuration={1550}
          autoPlayInterval={1800}
        />
      )}

      {!width && (
        <div className="mobile">
          <img src={pklot_7} alt="estacionamento" />
        </div>
      )}
      <div className="access-btn">
        <button className="effect box-fill-skew" type="button">
          Acessar
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 58vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    display: flex;
    justify-content: center;
    color: var(--white-clr-1);
  }

  img {
    height: 350px;
    width: 100%;
  }
  .mobile {
    display: block;
  }

  .access-btn button {
  }

  @media (min-width: 992px) {
    height: 84vh;
    width: 50vw;
    justify-content: flex-end;
    position: relative;
    img {
      height: 520px;
      width: 100%;
      border-radius: 4px;
    }
    ul {
      box-shadow: var(--dark-shadow);
    }
    .access-btn {
      position: absolute;
      bottom: 10px;
    }
    .mobile {
      display: none;
    }
  }
`;

export default Starter;
