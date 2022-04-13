import React from 'react';
import { FcSearch } from 'react-icons/fc';

function Header() {
  return (
    <>
      <div className="header-container">
        <span className="header-name">
          <h1>Brick & Morty</h1>
        </span>
        <span className="header-search">
          <input type="text" name="name" className="header-searchbox" />
        </span>
        <span className="header-searchIcon">
          <FcSearch />
        </span>
      </div>
      <div className="header-alerts">
        <br />
        flash sale
        <br />
        save 40-60% on bedding
        <br />
        & bath from top brands
      </div>
    </>
  );
}

export default Header;
