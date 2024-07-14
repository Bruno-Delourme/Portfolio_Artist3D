// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { 
        // Scrolling down
        setShowHeader(false);
      } else { 
        // Scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <header className={`header ${showHeader ? 'show' : 'hide'}`}>
       <div className="logoTop" onClick={scrollToTop}>
       <div className="logoTop2"><span className="span2">STUDIO</span></div>
        
        </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">PROJETS</a></li>
          <li><a href="#">A PROPOS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;