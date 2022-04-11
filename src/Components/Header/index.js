import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../Navigation';

function Header({ currentPage, setCurrentPage }) {
  return (
    <header>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </header>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Header;
