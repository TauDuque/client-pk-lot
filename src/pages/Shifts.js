import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Logo } from "../components";
import { workers_staff, helps } from "../utils";

const Shift = () => {
  const { getName } = useGlobalContext();
  const description = helps.find((desc) => desc.id === "Shift");
  const { title, help } = description;

  useEffect(() => {
    getName(title, help);
  }, []);

  return (
    <Wrapper className="section">
      <Logo />
      <div className="shift-info">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Turno</th>
            </tr>
          </thead>
          <tbody>
            {workers_staff.map((worker, index) => {
              return (
                <tr key={index}>
                  <td>{worker.name}</td>
                  <td>{worker.job}</td>
                  <td>{worker.shift}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .shift-info {
    width: 100%;
  }

  text-transform: capitalize;
  table {
    width: 100%;
  }
  th {
    border: 1px solid var(--grey-metal);
    padding: 4px;
  }
  td {
    padding-bottom: 5px;
  }
  @media (min-width: 992px) {
  }
`;

export default Shift;
