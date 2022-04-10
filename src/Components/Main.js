import React from 'react';
import PropTypes from 'prop-types';

import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

import '../assets/scss/main.scss';

function Main({ currentPage }) {
  function renderPage() {
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    return <Resume />;
  }

  return <main >{renderPage()}</main>;
}

Main.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Main;
