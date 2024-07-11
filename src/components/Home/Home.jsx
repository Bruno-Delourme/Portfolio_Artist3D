/* eslint-disable no-unused-vars */
import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>3D ARTIST <p></p>GAME DESIGNER</h1>
        <p>Je suis toujours prêt à me dépasser pour créer des visuels qui accentuent l&apos;immersivité des projets sur lesquels je travaille.</p>
        
        <button className="about-button">
          <span className="about-button-content">A PROPOS</span>
        </button>
      </div>
      <div className="home-image">
        {}
        <div className="home-placeholder"></div>
      </div>
    </section>
  );
}

export default Home;
