import React from 'react';

import Qualifications from '../Components/Qualifications';
import Skills from '../Components/Skills';

function Resume() {
  return (
    <section className="resume-section is-flex is-align-items-center is-justify-content-center mx-auto">
      <div className="container is-flex is-flex-direction-column is-vcentered is-centered px-3">
        <Qualifications />
        <Skills />
        <p className="has-text-centered mt-5">
          Download my CV <a href="https://u.pcloud.link/publink/show?code=XZYvMVVZUaqCRN4Oqn0qovRBwHNWOJAsFbMX">here</a>
        </p>
      </div>
    </section>
  );
}

export default Resume;
