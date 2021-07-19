import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useGlobalContext } from "../context";
import { Logo } from "../components";
import { workers_staff, helps } from "../utils";

const Birthdays = () => {
  const currentMonth = moment(new Date()).format("MM");
  const { getName } = useGlobalContext();

  const description = helps.find((desc) => desc.id === "Birthdays");
  const { title, help } = description;

  useEffect(() => {
    getName(title, help);
  }, []);

  const dataB = workers_staff.map((item) => {
    const { birthday } = item;
    const bmonth = [];
    for (var i = 0; i < birthday.length; i++) {
      const bmonth = birthday.slice(-2);
      if (bmonth === currentMonth) {
        return item;
      } else return null;
    }
  });

  const monthBirthday = dataB.find((item) => item !== null);

  const { icon, name, birthday, job } = monthBirthday;

  return (
    <Wrapper className="section">
      <Logo />
      <div className="birthdays-info">
        <img src={icon} alt="ícone" />
        <div className="col-info">
          <span>nome:</span>
          <h3>{name}</h3>
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-transform: capitalize;
  span {
    padding-right: 8px;
  }
  .birthdays-info {
    border: 1px solid var(--vanilla);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 25px;
  }
  img {
    margin-bottom: 25px;
  }
  .col-info {
    display: flex;
    align-items: baseline;
  }
  @media (min-width: 992px) {
  }
`;

export default Birthdays;
