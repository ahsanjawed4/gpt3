import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";
const Menu = () => (
  <>
    <div>
      <p>
        <a href="#home">Home</a>
      </p>
    </div>
    <div>
      <p>
        <a href="#wgpt">What is GPT?</a>
      </p>
    </div>
    <div>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
    </div>
    <div>
      <p>
        <a href="#features">Case Studies</a>
      </p>
    </div>
    <div>
      <p>
        <a href="#blog">Library</a>
      </p>
    </div>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar_links">
        <div className="gpt3__navbar_links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links__container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu__container scale-up-center">
            <div className="gpt3__navbar-menu__container-links">
              <Menu />
              <div className="gpt3__navbar-menu__container-links-signs">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
