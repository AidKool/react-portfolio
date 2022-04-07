import React from 'react';

import Facts from '../Components/Facts';
import Bio from '../Components/Bio';
import profilePicture from '../assets/images/profile-picture.png';

function About() {
  return (
    <section className="about-section is-flex is-align-items-center is-justify-content-center mx-auto">
      <div className="container is-vcentered is-multiline is-variable px-3">
        <section className="columns is-centered">
          <div className="column is-3-tablet">
            <figure className="profile-picture is-flex is-justify-content-center">
              <img src={profilePicture} alt="me" />
            </figure>
            <h1 className="title has-text-centered my-4">Jordi</h1>
          </div>
          <div className="column  is-4-tablet is-flex is-flex-direction-column is-align-items-center">
            <Facts />
          </div>
        </section>
        <section>
          <Bio />
        </section>
      </div>
    </section>
  );
}

export default About;
