import React from 'react';

function Navigation() {
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="container px-2">
        <div className="navbar-brand">
          <div
            role="button"
            tabIndex="0"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
            onClick={toggleMenu}
            onKeyPress={toggleMenu}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>

        <div className={showMenu ? 'navbar-menu is-active' : 'navbar-menu'}>
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
  );
}

export default Navigation;
