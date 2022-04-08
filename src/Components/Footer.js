import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import '../assets/scss/footer.scss';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container py-4 is-flex is-flex-direction-column is-align-items-center">
        <div className="social-media is-flex">
          <FaGithub className="is-size-3 has-text-black is-clickable social-media-icon" />
          <FaLinkedin className="is-size-3 has-text-link is-clickable social-media-icon" />
        </div>
        <p className="has-text-centered is-size-7">{year} &copy; All Rights Reserved</p>
        <a className="is-size-7 has-text-centered is-block" href="https://www.freepik.com/vectors/man">
          Man vector created by studiogstock - www.freepik.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
