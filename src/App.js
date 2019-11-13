import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Manager from './components/Manager';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router className="App">
      <Header />
      <Manager />
      <Footer />
    </Router>
  );
}

export default App;
