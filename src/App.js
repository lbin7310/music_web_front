import React from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router className="App">
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
