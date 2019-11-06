import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 55px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #f1f2f6;
  color: #ced6e0;
  height: 55px;
`;

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