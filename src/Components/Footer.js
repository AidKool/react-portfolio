import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container block py-4">
        <p className="has-text-centered is-size-7">{year} &copy; All Rights Reserved</p>
        <a className="is-size-7 has-text-centered is-block" href="https://www.freepik.com/vectors/man">
          Man vector created by studiogstock - www.freepik.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
