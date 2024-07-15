// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import MagnifyingGlass from './components/MagnifyingGlass/MagnifyingGlass';
import Object3DViewer from './components/Objet3d/Objet3D';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Object3DViewer />
      <MagnifyingGlass text="Ceci est la phrase à agrandir sous la loupe." />
      <Contact />
    </div>
  );
}

export default App;