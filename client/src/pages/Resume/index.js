import React from 'react';

import Qualifications from '../../Components/Qualifications';
import Skills from '../../Components/Skills';

function Resume() {
  return (
    <section className="resume-section">
      <div className="container is-flex is-flex-direction-column px-3">
        <Qualifications />
        <Skills />
        <p className="has-text-centered mt-5">
          Download my CV{' '}
          <a
            href="https://docs.google.com/document/d/1d1VYNuN4srvU36xZ4K3W7qmEP408WC8gxDqXAJbtORM/edit?usp=sharing"
            target="_blank"
            rel="noreferrer">
            here
          </a>
        </p>
      </div>
    </section>
  );
}

export default Resume;
