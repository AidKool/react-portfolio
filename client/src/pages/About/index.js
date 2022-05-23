import React from 'react';

import Bio from '../../Components/Bio';

import './about.scss';

function About() {
  const intro = "Hi, I'm Jordi";
  return (
    <section className="about-section px-4">
      <div className="container about-container is-flex is-flex-direction-column">
        <section className="columns is-centered intro-container">
          <div className="column is-6-tablet is-flex is-flex-direction-column is-justify-content-center">
            <h1 className="intro my-4">{intro}</h1>
            <p className="tagline my-0">
              a <span className="full-stack">Full Stack Developer</span>
              <br />
              based in Manchester
            </p>
          </div>
          <div className="column is-6-tablet">
            <figure className="profile-picture is-flex is-justify-content-center">
              <img
                className="profile-picture"
                src="https://res.cloudinary.com/dxe6c1nwr/image/upload/q_auto:good/v1649518225/me_o04xb9.png"
                alt="me"
              />
            </figure>
          </div>
        </section>
        <section className="is-flex is-justify-content-center">
          <Bio />
        </section>
      </div>
    </section>
  );
}

export default About;
