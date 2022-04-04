import React from 'react';

function Header() {
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
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

          <div
            className={
              showMenu ? 'navbar-menu mr-0 is-active' : 'navbar-menu mr-0'
            }
          >
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
