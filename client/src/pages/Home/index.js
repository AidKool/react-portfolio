import React from 'react';
import picture from '../../assets/images/1639934022606.jpeg';

import './home.scss';

function Home() {
  const intro = "Hi, I'm Jordi";
  return (
    <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center home-container">
      <img src={picture} className="profile-picture" alt="profile" />
      <h1 className="intro">{intro}</h1>
      <p className="tagline my-0 has-text-centered">
        a <span className="full-stack">Full Stack Developer</span>
        <br />
        based in Manchester
      </p>
    </div>
  );
}

export default Home;
