import React from 'react';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import './footer.scss';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container py-4 is-flex is-flex-direction-column is-align-items-center">
        <div className="social-media is-flex">
          <a href="https://github.com/AidKool" target="_blank" rel="noreferrer">
            <FaGithubSquare className="is-size-3 has-text-black is-clickable social-media-icon" />
          </a>
          <a href="https://www.linkedin.com/in/jordilanau/" target="_blank" rel="noreferrer">
            <FaLinkedin className="is-size-3 has-text-link is-clickable social-media-icon" />
          </a>
        </div>
        <p className="has-text-centered is-size-7">{year} &copy; All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
