import React from 'react';

import skills from '../data/skills';
import profilePicture from '../assets/images/profile-picture.png';
import '../assets/scss/about.scss';

function About() {
  return (
    <section className="about-section is-flex is-align-items-center is-justify-content-center mx-auto">
      <div className="container is-flex is-flex-direction-column is-vcentered flex-gap px-3">
        <div className="intro">
          <figure className="profile-picture is-flex is-justify-content-center">
            <img src={profilePicture} alt="me" />
          </figure>
          <h1 className="title has-text-centered my-4">Hi, I&rsquo;m Jordi</h1>
          <p className="subtitle has-text-centered my-4">Final year CIS student</p>
          <p className="subtitle has-text-centered my-4">Full Stack Developer</p>
        </div>
        <section className="bio">
          <article className="content">
            <h2 className="has-text-centered">Skills & Knowledge</h2>
            <ul className="skills-list has-text-centered mx-auto">
              {skills.map((skill) => (
                <li key={skill.id}>{skill.text}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </section>
  );
}

export default About;
