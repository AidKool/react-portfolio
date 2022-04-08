import React from 'react';
import PropTypes from 'prop-types';

import '../assets/scss/navigation.scss';

function Navigation({ currentPage, setCurrentPage }) {
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
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

        <div className={showMenu ? 'navbar-menu is-active py-0 is-shadowless' : 'navbar-menu'}>
          <ul className="navbar-end has-background-dark">
            <li className="navbar-item">
              <a
                href="#about"
                className={currentPage === 'about' ? 'has-text-white active' : 'has-text-white'}
                onClick={() => {
                  setCurrentPage('about');
                  toggleMenu();
                }}>
                About
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="#portfolio"
                className={currentPage === 'portfolio' ? 'has-text-white active' : 'has-text-white'}
                onClick={() => {
                  setCurrentPage('portfolio');
                  toggleMenu();
                }}>
                Portfolio
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="#contact"
                className={currentPage === 'contact' ? 'has-text-white active' : 'has-text-white'}
                onClick={() => {
                  setCurrentPage('contact');
                  toggleMenu();
                }}>
                Contact
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="#resume"
                className={currentPage === 'resume' ? 'has-text-white active' : 'has-text-white'}
                onClick={() => {
                  setCurrentPage('resume');
                  toggleMenu();
                }}>
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
