import React from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 55px;
`

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <Router className="App">
      <Wrapper>
        <Header />
        <Routes />
      </Wrapper>
    </Router>
  );
}

export default App;
