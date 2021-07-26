import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { Logo, Loading } from "../components";
import { helps } from "../utils";
import { GiConfirmed } from "react-icons/gi";

const SubmitedForm = () => {
  const { getName } = useGlobalContext();
  const description = helps.find((desc) => desc.id === "SubmitedForm");
  const { title, help } = description;

  useEffect(() => {
    getName(title, help);
  }, []);

  return (
    <Wrapper className="section">
      <Logo />
      <div className="submited-info">
        <div className="success-icn">
          <GiConfirmed className="icon" />
        </div>
        <div className="submit-btn">
          <Link to="/home">
            <button
              type="submit"
              className="effect box-fill-skew"
              style={{ border: "1px solid var(--wine-purple)" }}
            >
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .success-icn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a button {
    border: 2px solid var(--vanilla);
  }
  .icon {
    color: var(--bs-green);
    font-size: 70px;
    display: flex;
    margin-bottom: 100px;
  }
  @media (min-width: 992px) {
  }
`;

export default SubmitedForm;
