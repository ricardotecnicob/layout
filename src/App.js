import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './pages/About';
import Servicos from './pages/Servicos';
import Products from './pages/Products';

function App() {
  return (
    <div>
        <Header />
        <About />
        <Servicos />
        <Products />
    </div>
  );
}

export default App;
