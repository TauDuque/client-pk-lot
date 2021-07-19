import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Logo } from "../components";

const SubmitVehicle = () => {
  const { getName } = useGlobalContext();

  const [name, setName] = useState("");
  const [idNum, setIdNum] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    getName("Cadastrar Veículos");
  }, []);

  function submitHandler() {}

  return (
    <Wrapper className="section">
      <Logo />
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <div className="input-group mb-3 row">
            <label htmlFor="basic-url" className="form-label">
              Nome Completo:
            </label>
            <input type="text" className="form-control" id="basic-url" />
          </div>
          <div className="row m-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Identidade"
                aria-label="Identidad"
                aria-required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Telefone"
                aria-label="Telefone"
              />
            </div>
          </div>
          <div className="form-group row m-4">
            <div
              className="form-check form-check-inline col"
              style={{ marginLeft: "12px" }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Carro"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Carro
              </label>
            </div>
            <div className="form-check form-check-inline col">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Moto"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Moto
              </label>
            </div>
          </div>
          <div className="time-form">
            <label htmlFor="basic-url" className="form-label">
              Tempo de Peranência:
            </label>
            <input type="number" min="1" max="48" />
          </div>
          <div className="submit-btn">
            <button type="submit" className="effect box-fill-skew">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  label {
    align-self: flex-end;
  }
  .time-form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .time-form label {
    padding-right: 18px;
    align-self: center;
    margin-bottom: 0;
  }
  .time-form input {
    display: flex;
    width: 85px;
    padding-inline-start: 32px;
  }
  .submit-btn {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit-btn button {
    color: var(--coral-red);
    border: 1px solid var(--vanilla);
  }
  .submit-btn button:hover {
    border: 1px solid var(--coral-red);
    color: var(--white-clr-1);
    background: var(--red-wine);
  }
  .submit-btn button:hover:after {
    background: var(--wine-red);
  }

  @media (min-width: 992px) {
  }
`;

export default SubmitVehicle;
