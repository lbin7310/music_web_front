import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 55px;
  left: 0;
  bottom: 0;
  border-top: 2px solid #f1f2f6;
  margin-top: 60px;
  color: #ced6e0;
  @media (max-width : 375px) {
    position: relative;
    bottom: 0;
  }
  @media (max-height: 375px) {
    position: relative;
    bottom: 0;
  }
  @media (max-height: 414px) {
    position: relative;
    bottom: 0;
  }
`;

const Footer = styled.div``;

const Title = styled.span`
  font-weight: 400;
`;

const Email = styled.div`
  font-size: 12px;
`;


export default () => {
  return (
    <Container>
      <Footer>
        <Title>Dolphin Music {new Date().getFullYear()} &copy;</Title>
        <Email>이메일 : lbin7310@gmail.com</Email>
      </Footer>
    </Container>
  )
}