// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MagnifyingGlass from './components/MagnifyingGlass/MagnifyingGlass';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <MagnifyingGlass text="Ceci est la phrase à agrandir sous la loupe." />
    </div>
  );
}

export default App;