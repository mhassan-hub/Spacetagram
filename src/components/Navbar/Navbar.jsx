import React from 'react';

import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="nav-bar">
      <h1 className="app-title" aria-label="title">
        SPACETAGRAM
      </h1>
      <i className="icon fas fa-space-shuttle" />
    </div>
  );
}
