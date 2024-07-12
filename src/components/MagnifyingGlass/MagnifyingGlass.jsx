// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const MagnifyingGlass = ({ text }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="magnifying-container"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <p className="magnified-text">{text}</p>
      <div
        className="magnifying-glass"
        style={{
          top: position.y - 75,
          left: position.x - 75,
          clipPath: 'circle(75px at 75px 75px)',
        }}
      >
        <p
          className="magnified-text zoomed"
          style={{
            transform: `translate(${-position.x * 2 + 85}px, ${-position.y * 2 + 85}px) scale(2)`,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

MagnifyingGlass.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MagnifyingGlass;
