import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background-color: #0652DD;
  z-index: 100;
  @media (max-width:375px) {
/* justify-content: center; */ 
  }
`;
const HomeLink = styled(Link)`
  margin-left: 6%;
  text-decoration: none;
  font-size: 25px;
  font-weight: 900;
`;

const HomeTitle = styled.div`
  font-size: 20px;
  color: white;
`;

export default () => {
  return (
    <Header>
      <HomeLink to="/">
        <HomeTitle>
          Dolphin Music
        </HomeTitle>
      </HomeLink>
    </Header>
  );
};
