import React from 'react';

import Qualifications from '../Components/Qualifications';
import Skills from '../Components/Skills';

function Resume() {
  return (
    <section className="resume-section">
      <div className="container is-flex is-flex-direction-column px-3">
        <Qualifications />
        <Skills />
        <p className="has-text-centered mt-5">
          Download my CV{' '}
          <a
            href="https://u.pcloud.link/publink/show?code=XZYvMVVZUaqCRN4Oqn0qovRBwHNWOJAsFbMX"
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
