import React from 'react';

import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="nav-bar">
      <h1 className="app-title">
        SPACETAGRAM
        <i className="fas fa-space-shuttle" />
      </h1>
    </div>
  );
}
