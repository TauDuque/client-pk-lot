import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import moment from "moment";
import { Link, useHistory } from "react-router-dom";
import { Logo } from "../components";
import { helps, generateId } from "../utils";

const Accounts = () => {
  const {
    getName,
    vehicles,
    total_day_gain,
    total_month_gain,
    api,
    free_vacancies,
    fetchData,
  } = useGlobalContext();
  const description = helps.find((desc) => desc.id === "Accounts");
  const { title, help } = description;
  const history = useHistory();

  useEffect(() => {
    getName(title, help);
  }, []);

  async function closeDay() {
    const id = generateId();
    const veiculosNum = vehicles.length;
    const vagasLivres = free_vacancies - vehicles.length;
    const now = moment().format("YYYY/MM/DD", "pt");
    const data = {
      id: id,
      veiculos: veiculosNum,
      valor: total_day_gain,
      vagas_livres: vagasLivres,
      dia: now,
    };
    const newData = await api.post("gains", data);
    history.push("/leaving");
  }

  return (
    <Wrapper className="section">
      <Logo />
      <div className="accounts-info">
        <div className="col-info">
          <span>Total de Veículos:</span>
          <h3>{vehicles.length}</h3>
        </div>
        <div className="col-info">
          <span>Valor Total do Dia:</span>
          <h3>R${total_day_gain}</h3>
        </div>
        <div className="col-info">
          <span>Valor Total do Mês:</span>
          <h3>R${total_month_gain}</h3>
        </div>
        <div className="submit-btn final-btn">
          <span style={{ marginBottom: "15px" }}>
            Clique para fechar a contabilidade do dia e sair
          </span>

          <button
            type="button"
            onClick={() => closeDay()}
            className="effect box-fill-skew"
            style={{ border: "1px solid var(--wine-purple)" }}
          >
            Encerrar
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  span {
    padding-right: 14px;
  }
  .final-btn {
    display: flex;
    flex-direction: column;
  }
  .accounts-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;
  }
  .col-info {
    display: flex;
    align-items: baseline;
    margin: 12px;
  }
  @media (min-width: 992px) {
  }
`;

export default Accounts;
