import React from 'react';

import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="nav-bar">
      <h1 data-testid="app-title" className="app-title" aria-label="title">
        SPACETAGRAM
      </h1>
      <i data-testid="title-icon" className="icon fas fa-space-shuttle" />
    </div>
  );
}
