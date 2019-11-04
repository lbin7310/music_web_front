import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background-color: #1B1464;
  z-index: 100;
`;
const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 25px;
`;

export default () => {
  return (
    <Header>
      <HomeLink to="/">Home</HomeLink>
    </Header>
  );
};
