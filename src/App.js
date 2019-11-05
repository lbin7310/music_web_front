import React from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 55px;
  height: 100%;
`

function App() {
  return (
    <Router className="App">
      <Header />
      <Wrapper>
        <Routes />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
