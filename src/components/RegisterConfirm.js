import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RegisterConfirm = () => {
  return (
    <Wrapper className="section">
      <div className="card-info">
        <span>O preço final é:</span>
        <h3>R$25</h3>
        <div className="submit-btn">
          <Link to="/home">
            <button
              type="submit"
              className="effect box-fill-skew"
              style={{ border: "1px solid var(--wine-purple)" }}
            >
              Retornar
            </button>
            <button
              type="submit"
              className="effect box-fill-skew"
              style={{ border: "1px solid var(--wine-purple)" }}
            >
              Confirmar
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card-info {
    height: 55px;
    width: 55px;
  }
  @media (min-width: 992px) {
  }
`;

export default RegisterConfirm;
