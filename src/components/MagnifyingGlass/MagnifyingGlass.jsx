// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './styles.css';

const MagnifyingGlass = ({ text }) => {
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <div className="container">
      <div
        className="MagnifyingGlass"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
      {hover && (
        <div
          className="zoom"
          style={{ left: position.x, top: position.y }}
        >
          {text}
        </div>
      )}
      <div className="text">
        {text}
      </div>
    </div>
  );
};

export default MagnifyingGlass;
