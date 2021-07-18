import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="section section-center">
        <div className="loading"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .loading {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: var(--grey-metal);
    animation: spinner 0.6s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
