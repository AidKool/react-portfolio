import React from 'react';

import profilePicture from '../../assets/images/profile-picture.png';
import '../../assets/scss/about.scss';

function About() {
  return (
    <section className="about-section is-flex is-align-items-center">
      <div className="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <div className="intro">
          <figure className="profile-picture is-flex is-justify-content-center">
            <img src={profilePicture} alt="me" />
          </figure>
          <p className="has-text-centered">Hi, I&rsquo;m Jordi</p>
          <p>A Software Developer in Manchester</p>
        </div>
      </div>
    </section>
  );
}

export default About;
