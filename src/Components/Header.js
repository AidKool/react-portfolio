import React from 'react';

function Header() {
  function toggleMenu() {
    const menuElement = document.querySelector('.navbar-menu');
    menuElement.classList.toggle('is-active');
  }

  return (
    <header>
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div
              role="button"
              tabIndex="0"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-menu"
              onClick={toggleMenu}
              onKeyPress={toggleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <a href="#about">About me</a>
              </div>
              <div className="navbar-item">
                <a href="#portfolio">Portfolio</a>
              </div>
              <div className="navbar-item">
                <a href="#contact">Contact</a>
              </div>
              <div className="navbar-item">
                <a href="#resume">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
