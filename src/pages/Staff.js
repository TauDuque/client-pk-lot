import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Logo } from "../components";
import { workers_staff, helps } from "../utils";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Staff = () => {
  const { getName } = useGlobalContext();
  const [page, setPage] = useState(0);

  const description = helps.find((desc) => desc.id === "Staff");
  const { title, help } = description;

  useEffect(() => {
    getName(title, help);
  }, []);

  function NextWorker() {
    if (page === 8) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  }

  function LastWorker() {
    if (page === 0) {
      setPage(8);
    } else {
      setPage(page - 1);
    }
  }

  const data = workers_staff[page];

  const { name, adress, birthday, job, icon } = data;

  return (
    <Wrapper className="section">
      <Logo />
      <div className="staff-info">
        <img src={icon} alt="ícone" />
        <div className="col-info">
          <span>nome:</span>
          <h3>{name}</h3>
        </div>
        <div className="col-info">
          <span>endereço:</span>
          <h3>{adress}</h3>
        </div>
        <div className="col-info">
          <span>aniversário:</span>
          <h3>{birthday}</h3>
        </div>
        <div className="col-info">
          <span>função:</span>
          <h3>{job}</h3>
        </div>
      </div>
      <div className="worker-btn">
        <button type="button" onClick={() => LastWorker()}>
          <BsArrowLeft />
        </button>
        <button type="button" onClick={() => NextWorker()}>
          <BsArrowRight />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-transform: capitalize;
  span {
    padding-right: 8px;
  }
  .staff-info {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  img {
    margin-bottom: 25px;
  }
  .col-info {
    display: flex;
    align-items: baseline;
  }
  .worker-btn {
    display: flex;
    gap: 15px;
    margin-top: 10px;
  }

  .worker-btn button {
    width: 45px;
    cursor: pointer;
    border: 1px solid var(--white-clr-3);
    background: var(--grey-natural);
    align-items: center;
    padding: 3px;
  }
  .worker-btn button:hover {
    background: var(--vanilla);
    color: var(--all-black);
    border: 1px solid var(--light-black);
  }
  @media (min-width: 992px) {
  }
`;

export default Staff;
