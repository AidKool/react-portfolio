import React from 'react';
import PropTypes from 'prop-types';

function Navigation({ currentPage, setCurrentPage }) {
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
          <ul className="navbar-end">
            <li className={currentPage === 'about' ? 'has-background-dark navbar-item' : 'navbar-item'}>
              <a href="#about" onClick={() => setCurrentPage('about')}>
                About me
              </a>
            </li>
            <li className={currentPage === 'portfolio' ? 'has-background-dark navbar-item' : 'navbar-item'}>
              <a href="#portfolio" onClick={() => setCurrentPage('portfolio')}>
                Portfolio
              </a>
            </li>
            <li className={currentPage === 'contact' ? 'has-background-dark navbar-item' : 'navbar-item'}>
              <a href="#contact" onClick={() => setCurrentPage('contact')}>
                Contact
              </a>
            </li>
            <li className={currentPage === 'resume' ? 'has-background-dark navbar-item' : 'navbar-item'}>
              <a href="#resume" onClick={() => setCurrentPage('resume')}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Navigation;
