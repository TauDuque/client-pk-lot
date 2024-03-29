import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Logo, Loading } from "../components";
import { Link } from "react-router-dom";
import { helps, paginate } from "../utils";

const Vehicles = () => {
  const { getName, vehicles, fetchData } = useGlobalContext();
  const description = helps.find((desc) => desc.id === "Vehicles");
  const { title, help } = description;
  const [page, setPage] = useState(0);

  function goFoward() {
    if (page === fullData.length - 1) {
      setPage(0);
    } else setPage(page + 1);
  }

  function goBack() {
    if (page <= 0) {
      setPage(fullData.length - 1);
    } else setPage(page - 1);
  }

  const fullData = paginate(vehicles);
  const data = fullData[page];

  useEffect(() => {
    getName(title, help);
    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
  } else
    return (
      <Wrapper className="section">
        <Logo />
        <div className="vehicles-info">
          <table>
            <thead>
              <tr>
                <th>cliente</th>
                <th>identidade</th>
                <th>contato</th>
                <th>veículo</th>
                <th>horas</th>
                <th>preço</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const { id, nome, id_num, phone, type, time, single_price } =
                  item;
                return (
                  <tr key={index}>
                    <td>
                      <Link to={`/vehicles/${id}`}>{nome}</Link>
                    </td>
                    <td>
                      <Link to={`/vehicles/${id}`}>{id_num}</Link>
                    </td>
                    <td>
                      <Link to={`/vehicles/${id}`}>{phone}</Link>
                    </td>
                    <td>
                      <Link to={`/vehicles/${id}`}>{type}</Link>
                    </td>
                    <td>
                      <Link to={`/vehicles/${id}`}>{time}</Link>
                    </td>
                    <td>
                      <Link to={`/vehicles/${id}`}>{single_price}</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="table-btn">
          <button type="button" onClick={() => goBack()}>
            <BsArrowLeft />
          </button>
          <button type="button" onClick={() => goFoward()}>
            <BsArrowRight />
          </button>
        </div>
      </Wrapper>
    );
};

const Wrapper = styled.section`
  .vehicles-info {
    text-transform: capitalize;
    width: 345px;
    min-height: 225px;
  }
  table {
    border: 1px solid var(--light-black);
    padding: 2px;
    width: 345px;
  }
  a {
    color: var(--mid-black);
  }
  th {
    font-size: 10px;
  }

  td {
    border: 1px solid var(--grey-metal);
    font-size: 9px;
    padding: 2px;
    cursor: pointer;
  }
  td:hover {
    background: var(--vanilla);
    color: var(--all-black);
  }
  .table-btn {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    justify-content: center;
  }

  .table-btn button {
    width: 45px;
    cursor: pointer;
    border: 1px solid var(--white-clr-3);
    background: var(--grey-natural);
    align-items: center;
    padding: 3px;
  }
  .table-btn button:hover {
    background: var(--vanilla);
    color: var(--all-black);
    border: 1px solid var(--light-black);
  }
  @media (min-width: 992px) {
    .vehicles-info {
      width: 100%;
      min-height: 225px;
    }
    table {
      padding: 2px;
      width: 100%;
    }

    td {
      font-size: 12px;
      padding: 5px;
    }

    .table-btn {
      display: flex;
      gap: 15px;
      margin-top: 10px;
      justify-content: center;
    }

    .table-btn button {
      width: 45px;
      align-items: center;
      padding: 3px;
    }
  }
`;

export default Vehicles;
