/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { BsToggleOn } from 'react-icons/bs';
import { FaBiohazard } from 'react-icons/fa';

function Header(props) {
  const { toggleColorMode } = props;
  return (
    <>
      <div className="header-container">
        <span className="header-name">
          <a href="#">
            <FaBiohazard className="logo" />
          </a>
          &nbsp;
          Brick & Morty
        </span>
        <span className="header-search">
          <input type="text" name="name" className="header-searchbox" />
        </span>
        <div className="stayput">
          <span className="header-searchIcon">
            <FcSearch />
            <BsToggleOn onClick={toggleColorMode} />
          </span>
        </div>
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
