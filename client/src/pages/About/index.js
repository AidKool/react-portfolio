import React from 'react';
import Bio from '../../Components/Bio';

import './about.scss';

function About() {
  return (
    <section className="about-section px-4">
      <div className="container about-container is-flex is-flex-direction-column">
        <section className="is-flex is-justify-content-center">
          <Bio />
        </section>
      </div>
    </section>
  );
}

export default About;
