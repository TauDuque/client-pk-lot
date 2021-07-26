import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Logo, Loading } from "../components";
import { FaMotorcycle, FaCar } from "react-icons/fa";
import { helps } from "../utils";

const SingleVehicle = () => {
  const { getName, fetchSingleVehicle, single_vehicle, is_loading } =
    useGlobalContext();
  const description = helps.find((desc) => desc.id === "SingleVehicle");
  const { title, help } = description;
  const { id } = useParams();

  useEffect(() => {
    fetchSingleVehicle(id);
  }, [id]);

  useEffect(() => {
    getName(title, help);
  }, []);

  const { nome, id_num, phone, type, time, single_price } = single_vehicle;

  if (is_loading) {
    return <Loading />;
  }

  return (
    <Wrapper className="section">
      <Logo />
      <div className="singlev-info">
        {type === "carro" ? (
          <FaCar className="icon" />
        ) : (
          <FaMotorcycle className="icon" />
        )}
        <div className=" col-info">
          <span>cliente:</span>
          <h4>{nome}</h4>
        </div>
        <div className="col-info">
          <span>Identidade:</span>
          <h4>{id_num}</h4>
        </div>
        <div className="col-info">
          <span>contato:</span>
          <h4>{phone}</h4>
        </div>
        <div className="col-info">
          <span>veículo:</span>
          <h4>{type}</h4>
        </div>
        <div className="col-info">
          <span>horas:</span>
          <h4>{time}</h4>
        </div>
        <div className="col-info">
          <span>preço:</span>
          <h4>{single_price}</h4>
        </div>
        <div className="submit-btn">
          <Link to="/vehicles">
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
  text-transform: capitalize;
  h4 {
    color: var(--mid-black);
  }
  span {
    color: var(--grey-natural);
    padding-right: 8px;
  }
  .singlev-info {
    margin-top: -15px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .col-info {
    display: flex;
    align-items: baseline;
  }
  .icon {
    font-size: 65px;
    margin-bottom: 15px;
  }
  @media (min-width: 992px) {
  }
`;

export default SingleVehicle;
