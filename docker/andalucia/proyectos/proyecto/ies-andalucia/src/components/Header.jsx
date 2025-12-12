import React from 'react';
import './Header.css'; // Creamos este CSS

function Header() {
  return (
    <header className="header-instituto d-flex align-items-center justify-content-center">
      <div className="text-center text-white">
        <h1>IES Andalucía</h1>
        <p>Proyecto Web en React</p>
      </div>
    </header>
  );
}

export default Header;
